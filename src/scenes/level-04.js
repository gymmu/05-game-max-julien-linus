import { k, addGeneralGameLogic } from "../game.js"
import { generateMapJumpAndRun } from "../map.js"
import { loadKeyboardJumpAndRun } from "../keyboard.js"
import "./level-05.js"
import "./finish.js"
import createPlayer from "../player.js"

/**
 * Szene für das Level 2.
 *
 * Hier gibt es keine Gravitation, wir sind hier in einem RPG-Setting.
 */
k.scene("level-04", async () => {
  if (k.getData("loadData") === true) {
    k.setData("loadData", false)
    k.setGravity(2200)

    // Wir erstellen den Spieler
    createPlayer()

    // Hier laden wir die generelle Spiellogik. Also was passieren soll wenn
    // der Spieler mit einem Objekt kollidiert.
    addGeneralGameLogic()
  }

  // Wir laden die Tasenbelegung für ein Jump'n'Run-Spiel.
  loadKeyboardJumpAndRun()

  // Hier lassen wir die Spielwelt erstellen.
  // Wir müssen dieser Funktion auch den Spieler übergeben, damit die
  // Position vom Spieler richtig gesetzt werden kann.
  await generateMapJumpAndRun("maps/level-04.txt")

  k.setData("level", 4)

  k.onCollide("player", "goal", (player) => {
    k.go("level-05")
    music4.paused = true
  })

  k.onKeyRelease("0", () => {
    k.go("level-05")
    music4.paused = true
  })

  k.add([
    k.sprite("background4"),
    k.pos(k.width() / 2, k.height() / 2),
    k.z(-100),
    k.anchor("center"),
    k.fixed(),
    k.scale(16),
  ])

  k.onUpdate(() => {
    const player = k.get("player")[0]
    if (player.pos.y > 720) {
      k.go("lose")
      music4.stop()
    }
  })

  const music4 = k.play("backgroundMusic4", { loop: true, volume: 0.5 })

  const player = getPlayer()
  player.onDeath(() => {
    k.go("lose")
    music4.stop()
  })
})
