import { k, addGeneralGameLogic } from "../game.js"
import { generateMapJumpAndRun } from "../map.js"
import { loadKeyboardJumpAndRun } from "../keyboard.js"

import "./finish.js"

/**
 * Szene für das Level 2.
 *
 * Hier gibt es keine Gravitation, wir sind hier in einem RPG-Setting.
 */
k.scene("level-02", async () => {
  k.setGravity(2200)
  loadKeyboardJumpAndRun()

  await generateMapJumpAndRun("maps/level-02.txt")

  addGeneralGameLogic()

  k.onCollide("player", "cave", (player) => {
    if (player.hasFlower === true) {
      k.go("finish")
    }
  })

  k.onCollide("player", "flower", (player, flower) => {
    flower.destroy()
    player.hasFlower = true
  })

  k.add([
    k.sprite("background2"),
    k.pos(k.width() / 2, k.height() / 2),
    k.z(-100),
    k.anchor("center"),
    k.fixed(),
    k.scale(16),
  ])
  k.play("backgroundMusic2", { loop: true, volume: 0.5 })
})
