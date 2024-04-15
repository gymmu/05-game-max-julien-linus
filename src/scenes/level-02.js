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
k.scene("level-02", async () => {
  if (k.getData("loadData") === true) {
    k.setData("loadData", false)
    k.setGravity(2200)
    createPlayer()
    addGeneralGameLogic()
  }
  k.setData("level", 2)

  await generateMapJumpAndRun("maps/level-02.txt")

  loadKeyboardJumpAndRun()

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

  k.onUpdate(() => {
    const player = k.get("player")[0]
    if (player.pos.y > 720) {
      k.go("lose")
    }
  })

  k.play("backgroundMusic2", { loop: true, volume: 0.5 })
})
