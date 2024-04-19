import { k } from "./game.js"
import { TILESIZE } from "./globals.js"
import "./keyboard.js"

/**
 * Ein Spielobjekt das sich nicht bewegen lässt und der Spieler nicht
 * hindurch laufen kann. Kann verwendet werden um mit dem Spieler darüber zu
 * laufen, oder auch um ihn zu blockieren.
 */
export function wallJumpAndRun(x, y) {
  k.add([
    // Sagt welche Grafik verwendet werden soll.
    k.sprite("ground2"),

    // Sagt dem Spielobjekt das es eine Position auf der Spielkarte hat, und wo
    // diese ist. Die Spielposition wird mit der TILESIZE skaliert, damit alles
    // schön aufgeht so wie die Karte erzeugt wird. Da alle Spielobjekte
    // genau TILESIZE Pixel hoch und breit sind, gibt es so keine
    // Überschneidungen.
    k.pos(k.vec2(x, y).scale(TILESIZE)),

    // Mit `body` sagen wir das dieses Spielobjekt sich an die Physik halten
    // muss. Dadurch kann es auch mit anderen Spielobjekten kollidieren /
    // interagieren.
    // Mit `isStatic` können wir dem Spielobjekt sagen das es nicht von der
    // Gravitation beeinflusst wird.
    k.body({ isStatic: true }),

    // Mit `area` ermöglichen wir dem Spielobjekt mit anderen zu kollidieren.
    // Damit können wir zum Beispiel prüfen ob sich der Spieler und das
    // Objekt überschneiden, und darauf reagieren.
    k.area(),

    // Hier können mehrere `Tags` angegeben werden. Mit diesen `Tags` können
    // dann Interaktionen zwischen Spielelementen erstellt werden.
    // Zum Beispiel: onCollide("ground", "player", () => {Was soll passieren
    // wenn der Spieler den Boden berührt.})
    "ground2",
  ])
}

/**
 * Ein Pilz Spielobjekt, das dem Spieler schaden zufügt.
 */
export function bombJumpAndRun(x, y) {
  k.add([
    k.sprite("bomb"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body(),
    k.area(),
    "obstacle",
    "explosion",
    // Hier können wir zusätzliche Eigenschaften von einem Spielobjekt angeben.
    // Mit `isConsumable` könnten wir prüfen das dieses Objekt nur
    // aufgelesen wird, wenn der Spieler die Eigenschaft `kochen` erlernt
    // hat.
    {
      isConsumable: true,
      dmgAmount: 34,
      knockback: 10,
    },
  ])
}
function throwMic(player) {
  let mic = k.add([
    k.rect(10, 10),
    k.pos(player.pos),
    k.body(),
    k.area(),
    "mic",
    {
      dmgAmount: 30,
      onCollide: (obj) => {
        if (obj.is("taylor")) {
          obj.damage(30)
          obj.knockback(20, 0)
        }
      },
    },
  ])
}

export function micJumpnRun(x, y) {
  const scaleFactor = 0.7
  const moveDirection = direction === "left" ? k.LEFT : k.RIGHT

  return k.add([
    k.sprite("mic"),
    k.pos(k.vec2(x, y)),
    k.scale(scaleFactor),
    k.area(),
    k.move(k.RIGHT, 300),
    "mic",
    {
      dmgAmount: 50,
    },
  ])
}

export function taylorJumpAndRun(x, y) {
  const scaleFactor = 3

  const taylor = k.add([
    k.sprite("taylor"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.scale(scaleFactor),
    k.body({
      isStatic: false,
      mass: 10,
    }),
    k.area(),
    "taylor",
    {
      dmgAmount: 20,
      speed: 50,
    },
  ])
}
export function notesJumpAndRun(x, y) {
  const originalTileSize = 32
  const targetWidth = 80
  const targetHeight = 48
  const scale = Math.max(
    targetWidth / originalTileSize,
    targetHeight / originalTileSize,
  )

  k.add([
    k.sprite("notes"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.area(),
    "heal",
    {
      isConsumable: true,
      healAmount: 34,
    },
  ])
}
export function grammyJumpAndRun(x, y) {
  k.add([
    k.sprite("grammy"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.area(),
    "heal",
    {
      isConsumable: true,
      healAmount: 50,
    },
  ])
}
/**
 * Ein Spielobjekt Ziel, das vom Spieler erreicht werden muss.
 */
export function goalJumpAndRun(x, y) {
  k.add([
    k.sprite("cave"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    "goal",
  ])
}
