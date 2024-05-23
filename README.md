[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/7e7yTqeC)
# Spielprojekt

Dieses Repository bildet die Grundlage für ein Spielprojekt, das von Gruppen mit
jeweils vier Mitgliedern bearbeitet wird. Für die Umsetzung des Spiels wird die
Game-Engine [kaboom.js](https://kaboomjs.com/) verwendet.

## Inhaltsverzeichnis

1. [Installation](#installation)
2. [Veröffentlichen](#veröffentlichen)
3. [Arbeitsweise](#arbeitsweise)
4. [Mergen](#mergen)
5. [Resourcen](#resourcen)

## Installation

Damit wir [kaboom.js](https://kaboomjs.com/) und alle weiteren benötigten Dinge
verwenden können, müssen wir ein Terminal öffnen, und die beiden Befehle
ausführen.

```bash
npm install
npm run dev
```

Damit wird ein lokaler Webserver erstellt, wo wir unser Spiel direkt testen
können.

## Veröffentlichen

Das Spiel ist direkt über Github-Pages verfügbar. Das müssen Sie in den
Einstellungen des Repositories aktivieren, und zwar müssen Sie dort auf
Github-Actions umstellen, der Rest passiert dann automatisch. Eine neue Version
der Webseite wird immer dann erstellt, wenn ein neuer `commit` auf dem `main`
Branch gemacht wird, bzw. wenn ein `merge` in den `main` Branch gemacht wird.

## Arbeitsweise

Wir möchten jeweils in den Lektionen möglichst viel erledigt bekommen, und
dafür müssen wir effizient arbeiten. Wir arbeiten dafür in 4 Phasen.

### Phase 1 (ca. 15 Min)

In der ersten Phase besprechen wir uns als Team was wir heute für Aufgaben
erledigen, wer mit wem an welchen Aufgaben arbeitet, welche Branches wir
erstellen und wann diese gemerged werden. Wir versuchen dabei möglichst klug
mit den Änderungen vor zu gehen, so das nicht zu viele Merge-Konflikte
auftreten werden.

In dieser Phase bearbeiten wir nur Aufgaben die wir in der Datei
[backlog.md](backlog.md) aufgelistet haben. Das Backlog wird dann mit neuen
Aufgaben gefüllt, wenn wir in der Phase 4 sind.

### Phase 2 (ca. 30 Min)

Dies ist unsere erste Arbeitsphase, diese dauert bis zur Pause. Wir arbeiten
alleine oder im Team an einem Auftrag aus dem Backlog, den wir in der Phase 1
ausgesucht haben. Die ganze Arbeit wir in einem eigenen Branch gemacht. Der
Branch wird gemerged sobald die Arbeit fertig ist. Koordinieren Sie sich hier
jeweils mit Ihrer Gruppe, welche Branches zuerst gemerged werden sollen.
Versuchen Sie Branches nicht zur gleichen Zeit zu mergen.

In dieser Phase können auch Fragen gestellt werden, es muss aber auch
gearbeitet werden. Falls Sie lange warten müssen bis Ihre Frage geantwortet
werden kann, beschäftigen Sie sich mit einer weiteren Aufgabe (gestalten der
Webseite, neue Spritesheets, lesen der Dokumentation, einem Gruppenmitglied
helfen beim Programmieren)

### Pause

Tauschen Sie sich in der Pause ganz kurz darüber aus wie weit Sie gekommen
sind, kann bald gemerged werden, muss sonst etwas angepasst werden? Ansonsten
sollen Sie die Pause jedoch nutzen, es geht nur um den kurzen Austausch.

### Phase 3 (ca. 30 Min)

Dies ist unsere zweite Arbeitsphase. Hier wird sehr ähnlich zur ersten Phase
gearbeitet. Im besten Fall konnten Sie bereits einen Branch aus der ersten
Lektion mergen und die Aufgabe aus dem Backlog abhacken und nun eine weitere
Aufgabe beginnen. Es kann aber auch sein das Ihre Aufgabe länger dauert, und
Sie die ganze Zeit an einem Branch arbeiten. Wenn das der Falls ist, müssen Sie
für die Phase 4 genügend Zeit für den Merge einberechnen.

### Phase 4 (ca. 15 Min)

In dieser Phase versuchen wir alles was wir gemacht haben abzuschliessen und zu
mergen. Hier ist es wichtig das Sie im Team viel kommunizieren und sich über
die Reihenfolge von Merges Gedanken machen. Mergen Sie nicht mehrere Branches
zur gleichen Zeit!

Sind alle Branches gemerged, erstellen Sie eine neue Version mit den
Veränderungen die Sie gemacht haben. Erstellen Sie auch dafür einen neuen
Branch und beschreiben Sie die Änderungen, die Sie am Spiel gemacht haben, in
der Datei [changes.md](changes.md). Passen Sie die Datei
[backlog.md](backlog.md) an, so das erledigte Dinge abgehackt sind, und fügen
Sie neue Aufgaben zum Backlog hinzu.

Falls Sie mit einer Aufgabe nicht fertig geworden sind, also den Branch nicht
mergen konnten, machen Sie am Ende der Lektion einen Commit mit folgender
Nachricht:

```text
WIP

Dinge die noch erledigt werden müssen...
Schreiben Sie hier auf was Sie beim nächsten mal wieder wissen müssen, wenn Sie
daran weiter arbeiten.
```

Ganz am Ende lassen Sie dann im Termin noch den folgenden Befehl ausführen:

```bash
npm version minor
```

## Mergen

Hier wird kurz beschrieben wie Sie bei einem Merge vorgehen. Öffnen Sie die
Datei [backlog.md](backlog.md) und setzen Sie ein `x` bei Ihrer Aufgabe. Dann
können Sie einen letzten commit auf Ihrem branch machen, und diesen dann in den
`main` Branch mergen.

Wenn Konflikte auftreten, sollten dies immer nur Konflikte sein, die am selben
Tag erzeugt wurden. Sitzen Sie mit der Person zusammen, die bereits die
Änderungen gemacht hat, so dass Sie sicher alles richtig mergen können.

Testen Sie die Änderungen nach einem Merge unbedingt aus. Wenn alles
funktioniert hat, erstellen Sie eine neue Version in der Konsole, mit dem
Befehl:

```bash
npm version patch
```

Dann können Sie den `main` Branch pushen, und Ihren lokalen Branch löschen.

## Resourcen

Das Projekt ist ausführlich dokumentiert und sollte eine gute Anleitung bieten,
zusätzlich können Sie natürlich das Internet oder auch `Codeium` verwenden.
Eine hervorragende Quelle ist die Dokumentation von
[Kaboom.js](https://kaboomjs.com/). Oder aber auch der
[Playground von Kaboom.js](https://kaboomjs.com/play?example=add).

Wichtige Programme für die Bildbearbeitung sind
[Libresprite](https://libresprite.github.io/#!/) oder
[Gimp](https://www.gimp.org/). Sie können natürlich auch andere Software
benutzen die Sie bereits kennen.
