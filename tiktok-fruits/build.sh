#!/usr/bin/env bash
# Monte les 3 vidéos TikTok « fruits en tendance » à partir des images générées.
# Usage : bash build.sh
set -euo pipefail
cd "$(dirname "$0")"

FF="node_modules/@ffmpeg-installer/linux-x64/ffmpeg"
FONT="/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
OUT="out"; SCENES="scenes"; TXT="txt"
mkdir -p "$OUT" "$SCENES" "$TXT"

W=1080; H=1920; FPS=30

# draw <fichier-texte> <taille>  → filtre drawtext centré dans la zone sûre TikTok
draw() {
  echo "drawtext=fontfile=${FONT}:textfile=$1:expansion=none:fontcolor=white:fontsize=$2:line_spacing=14:borderw=8:bordercolor=black@0.85:x=(w-text_w)/2:y=h-text_h-560"
}

# scene <image> <durée-s> <légende-txt> <in|out> <taille-texte> <fichier-sortie>
scene() {
  local img="$1" dur="$2" cap="$3" dir="$4" size="$5" out="$6"
  local frames; frames=$(python3 -c "print(round($dur*$FPS))")
  local fade_out; fade_out=$(python3 -c "print(round($dur-0.22,2))")
  local z
  if [ "$dir" = "in" ]; then z="min(1.0+0.0015*on,1.12)"; else z="max(1.12-0.0015*on,1.0)"; fi
  "$FF" -y -hide_banner -loglevel error -i "$img" -vf \
"scale=2160:3840:force_original_aspect_ratio=increase,crop=2160:3840,zoompan=z='${z}':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=${frames}:s=${W}x${H}:fps=${FPS},fade=t=in:st=0:d=0.18:color=black,fade=t=out:st=${fade_out}:d=0.22:color=black,$(draw "$cap" "$size")" \
  -c:v libx264 -preset medium -crf 20 -pix_fmt yuv420p "$out"
}

concat() { # concat <sortie> <scenes...>
  local out="$1"; shift
  local list="$TXT/list-$(basename "$out" .mp4).txt"
  : > "$list"
  for s in "$@"; do echo "file '$PWD/$s'" >> "$list"; done
  "$FF" -y -hide_banner -loglevel error -f concat -safe 0 -i "$list" -c copy "$out"
}

mux() { # mux <vidéo-sans-son> <audio> <vidéo-finale>
  "$FF" -y -hide_banner -loglevel error -i "$1" -i "$2" \
    -filter_complex "[1:a]apad[a]" -map 0:v -map "[a]" \
    -c:v copy -c:a aac -b:a 128k -shortest -movflags +faststart "$3"
}

echo "— Vidéo 1 : bébés-fruits danse"
scene img/v1-01-stage.jpg   3.0 captions/v1s1.txt in  72 "$SCENES/v1s1.mp4"
scene img/v1-02-fraise.jpg  3.0 captions/v1s2.txt out 64 "$SCENES/v1s2.mp4"
scene img/v1-03-duo.jpg     3.0 captions/v1s3.txt in  64 "$SCENES/v1s3.mp4"
scene img/v1-04-finale.jpg  3.0 captions/v1s4.txt out 64 "$SCENES/v1s4.mp4"
concat "$SCENES/v1-cut.mp4" "$SCENES/v1s1.mp4" "$SCENES/v1s2.mp4" "$SCENES/v1s3.mp4" "$SCENES/v1s4.mp4"
mux "$SCENES/v1-cut.mp4" audio/voix-off-danse.mp3 "$OUT/01-bebes-fruits-danse.mp4"

echo "— Vidéo 2 : L'Île des Fruits (mini-série)"
scene img/v2-01-ile.jpg      3.0 captions/v2s1.txt in  68 "$SCENES/v2s1.mp4"
scene img/v2-02-rivalite.jpg 3.2 captions/v2s2.txt out 64 "$SCENES/v2s2.mp4"
scene img/v2-03-reactions.jpg 3.0 captions/v2s3.txt in  64 "$SCENES/v2s3.mp4"
scene img/v2-04-banano.jpg   4.0 captions/v2s4.txt out 68 "$SCENES/v2s4.mp4"
scene img/v2-05-victoire.jpg 3.3 captions/v2s5.txt in  64 "$SCENES/v2s5.mp4"
concat "$SCENES/v2-cut.mp4" "$SCENES/v2s1.mp4" "$SCENES/v2s2.mp4" "$SCENES/v2s3.mp4" "$SCENES/v2s4.mp4" "$SCENES/v2s5.mp4"
mux "$SCENES/v2-cut.mp4" audio/voix-off-ile.mp3 "$OUT/02-ile-des-fruits-episode1.mp4"

echo "— Vidéo 3 : ASMR fruits"
scene img/v3-01-coupe.jpg   4.0 captions/v3s1.txt in  64 "$SCENES/v3s1.mp4"
scene img/v3-02-spirale.jpg 4.0 captions/v3s2.txt out 68 "$SCENES/v3s2.mp4"
scene img/v3-03-jus.jpg     4.0 captions/v3s3.txt in  64 "$SCENES/v3s3.mp4"
concat "$SCENES/v3-cut.mp4" "$SCENES/v3s1.mp4" "$SCENES/v3s2.mp4" "$SCENES/v3s3.mp4"
mux "$SCENES/v3-cut.mp4" audio/voix-off-asmr.mp3 "$OUT/03-asmr-fruits.mp4"

echo "Terminé :"
ls -lh "$OUT"/*.mp4
