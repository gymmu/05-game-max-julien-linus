import { k } from "./game.js"
import { TILESIZE } from "./globals.js"
import { getPlayer } from "./player.js"
import * as GameObjects from "./gameObjects.js"
import { micJumpnRun } from "./gameObjects.js"

/**
 * Diese Funktion lädt die Tastenbelegung wie sie pro Level sein soll. Die
 * generelle Steuerung für ein Jump'n'Run-Level ist immer etwa gleich, deshalb
 * laden wir sie hier in einer eigenen Funktion.
 */
export function loadKeyboardJumpAndRun() {
  const player = getPlayer()
  // Wenn die Taste gedrückt wird, dann soll die Animation abgespielt werden.
  k.onKeyPress("left", () => {
    player.play("runLeft")
  })
  // Solange wie die Taste gedrückt wird, wird der Spieler in jedem Frame nach
  // links verschoben.
  k.onKeyDown("left", () => {
    player.move(k.LEFT.scale(player.speed))
  })
  // Wenn die Taste losgelassen wird, wird die idleAnimation abgespielt.
  k.onKeyRelease("left", () => {
    player.play("idleLeft")
  })

  k.onKeyPress("right", () => {
    player.play("runRight")
  })
  k.onKeyDown("right", () => {
    player.move(k.RIGHT.scale(player.speed))
  })
  k.onKeyRelease("right", () => {
    player.play("idleRight")
  })

  k.onKeyPress("up", () => {
    player.doubleJump()
  })
  k.onKeyPress("space", () => {
    player.speed *= 1.5
  })
  k.onKeyRelease("space", () => {
    player.speed = 5 * TILESIZE
  })
  onKeyRelease("m", () => {
    const pos = player.pos
    const mic = micJumpnRun(pos.x, pos.y)
    mic.play("spin")
    console.log("mic")
  })
}

/**
 * Diese Funktion lädt die Tastenbelegung wie sie pro Level sein soll. Die
 * generelle Steuerung für ein RPG-Level ist immer etwa gleich, deshalb
 * laden wir sie hier in einer eigenen Funktion.
 *
 * Da wir uns hier anders bewegen können wie in einem Jump'n'Run, haben wir
 * extra eine weitere Funktion erstellt, wo all diese Funktionen drin sind, wie
 * zum Beispiel nach oben oder unten laufen.
 */
export function loadKeyboardRPG() {
  const player = getPlayer()
  k.onKeyPress("left", () => {
    player.play("runLeft")
  })
  k.onKeyDown("left", () => {
    player.move(k.LEFT.scale(player.speed))
  })
  k.onKeyRelease("left", () => {
    player.play("idleLeft")
  })

  k.onKeyPress("right", () => {
    player.play("runRight")
  })
  k.onKeyDown("right", () => {
    player.move(k.RIGHT.scale(player.speed))
  })
  k.onKeyRelease("right", () => {
    player.play("idleRight")
  })

  k.onKeyPress("up", () => {
    player.play("runUp")
  })
  k.onKeyDown("up", () => {
    player.move(k.UP.scale(player.speed))
  })
  k.onKeyRelease("up", () => {
    player.play("idleUp")
  })

  k.onKeyPress("down", () => {
    player.play("runDown")
  })
  k.onKeyDown("down", () => {
    player.move(k.DOWN.scale(player.speed))
  })
  k.onKeyRelease("down", () => {
    player.play("idleDown")
  })
}
