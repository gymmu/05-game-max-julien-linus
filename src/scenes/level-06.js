import { k, addGeneralGameLogic } from "../game.js"
import { generateMapJumpAndRun } from "../map.js"
import { loadKeyboardJumpAndRun } from "../keyboard.js"
import "./finish.js"
import createPlayer from "../player.js"

/**
 * Szene für das Level 2.
 *
 * Hier gibt es keine Gravitation, wir sind hier in einem RPG-Setting.
 */
k.scene("level-06", async () => {
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
  await generateMapJumpAndRun("maps/level-06.txt")

  k.setData("level", 6)

  k.onCollide("player", "goal", (player) => {
    k.go("finish")
    music6.paused = true
  })

  k.onKeyRelease("0", () => {
    k.go("finish")
    music6.paused = true
  })

  k.add([
    k.sprite("background6"),
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
      music6.stop()
    }
  })

  const music6 = k.play("backgroundMusic6", { loop: true, volume: 0.5 })

  const player = getPlayer()
  player.onDeath(() => {
    k.go("lose")
    music6.stop()
  })
})
