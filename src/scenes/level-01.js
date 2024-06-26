import { k, addGeneralGameLogic } from "../game.js"
import createPlayer, { getPlayer } from "../player.js"
import { generateMapJumpAndRun } from "../map.js"
import { loadKeyboardJumpAndRun } from "../keyboard.js"
import "./level-02.js"
import "./lose.js"

/** Das ist unser erstes Level. Hier können wir Dinge einstellen die nur für
 * dieses Level gelten sollen, und aber auch Funktionen verwenden die in allen
 * Levels gleich sind.
 *
 * Wir brauchen hier das Schlüsselwort `async` direkt vor der Funktion, weil
 * wir innerhalb der Funktion eine spezielle Funktion aufrufen und warten
 * müssen bis diese beendet ist. Dieses warten passiert mit dem Schlüsselwort
 * `await`.
 *
 * Bei diesem ersten Level handelt es sich um ein Jump'n'Run-Spiel. Da müssen
 * wir einige spezialisierte Funktionen verwenden.
 *
 */
k.scene("level-01", async () => {
  k.setData("level", 1)
  // Wir stellen die Gravitation ein, damit es sich um ein Jump'n'Run-Spiel
  // handelt.
  k.setGravity(2200)

  // Wir erstellen den Spieler
  createPlayer()

  // Wir laden die Tasenbelegung für ein Jump'n'Run-Spiel.
  loadKeyboardJumpAndRun()

  // Hier lassen wir die Spielwelt erstellen.
  // Wir müssen dieser Funktion auch den Spieler übergeben, damit die
  // Position vom Spieler richtig gesetzt werden kann.
  await generateMapJumpAndRun("maps/level-01.txt")

  // Hier laden wir die generelle Spiellogik. Also was passieren soll wenn
  // der Spieler mit einem Objekt kollidiert.
  addGeneralGameLogic()

  // Hier wird zusätzliche Spiellogik erstellt, die nur in diesem Level
  // verwendet wird.
  // Hier ist es so das wenn der Spieler mit dem "goal" kollidiert, dann
  // kommen wir ins nächste Level.
  k.onCollide("player", "goal", () => {
    k.go("level-02")
    music1.paused = true
  })

  k.onKeyRelease("0", () => {
    k.go("level-02")
    music1.paused = true
  })
  k.add([
    k.sprite("background"),
    k.pos(k.width() / 2, k.height() / 2),
    k.z(-100),
    k.anchor("center"),
    k.fixed(),
    k.scale(16),
  ])

  // Diese Funktion wird bei jedem Frame ausgeführt. Bei einem Jump'n'Run ist
  // es so das wenn der Spieler von einer PLattform stützt, dann hat man das
  // Spiel verloren. Man könnte hier auch anders darauf reagieren, zum
  // Beispiel den Spieler an einen Checkpoint zurück setzen, und die
  // Lebenspunkte von dem Spieler anpassen.
  k.onUpdate(() => {
    const player = k.get("player")[0]
    if (player.pos.y > 1500) {
      k.go("lose")
      music1.stop()
    }
  })
  const music1 = k.play("backgroundMusic", { loop: true, volume: 0.5 })

  const player = getPlayer()
  player.onDeath(() => {
    k.go("lose")
    music1.stop()
  })
})
