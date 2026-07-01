const APP_VERSION = "1.1";

const APP_CHANGELOG = [
  {
    version: "1.1",
    groups: [
      {
        title: "Anmeldung statt Zugangsdaten",
        items: [
          "Die Nextcloud-Synchronisierung läuft jetzt über die zentrale Anmeldung in der Tools-Übersicht: einmal dort anmelden, danach werden die Materialdaten automatisch geladen und gespeichert – auch am Handy.",
          "Das frühere Verbindungsformular mit WebDAV-Adresse, Benutzername und App-Passwort entfällt komplett; es muss kein Passwort mehr auf dem Gerät eingegeben oder gespeichert werden.",
          "Nur wer das Tool in der Übersicht sehen darf, kann die Materialdaten öffnen (die Gruppen-Rechte werden serverseitig geprüft)."
        ]
      }
    ]
  },
  {
    version: "1.0",
    groups: [
      {
        title: "Materialliste",
        items: [
          "Übersicht gruppiert nach Mannschaft, alle Felder (Name, Kategorie, Mannschaft, Menge, Trainer, Zustand) direkt anklicken und bearbeiten.",
          "Suche nach Name sowie Filter nach Mannschaft und Kategorie, dazu Sortieren nach Name oder Menge.",
          "Trikotsätze (Trikot, Hose, Stutzen) werden als ein aufklappbarer Satz angezeigt, einzelne Teile bleiben separat bearbeitbar; der Trainer steht dabei einmal beim Satz (nicht je Teil) und ist dort direkt editierbar.",
          "Materialliste komplett löschen (mit doppelter Sicherheitsabfrage) – Mannschaften bleiben dabei erhalten."
        ]
      },
      {
        title: "Hinzufügen",
        items: [
          "Material-Art per Checkbox wählbar: Trikotsatz, Bälle, Leibchen oder Sonstiges.",
          "Mannschaft-Auswahl per Checkbox, dazu freies Eingabefeld \"Zuständiger Trainer\" je Material-Eintrag – dieselbe Mannschaft kann so mehrere Mengen mit unterschiedlichen Trainern haben.",
          "Bei Trikotsatz: Trikot-Nummern 1–40 per Checkbox-Grid, optional auch Hosen-Nummern, sonst Hosen/Stutzen über Mengenfeld.",
          "Text-Import (automatische Erkennung): beliebige Notizen, Listen oder Excel-Zeilen einfügen, automatisch analysieren lassen und vor der Übernahme in der Vorschau prüfen/anpassen."
        ]
      },
      {
        title: "Mannschaften",
        items: [
          "Mannschaften anlegen, umbenennen und löschen.",
          "Umbenennen überträgt die Zuordnung automatisch auf alle Material-Einträge sowie auf Umbuchungsprotokoll und Inventur-Stichtage."
        ]
      },
      {
        title: "Reserve & Umbuchung",
        items: [
          "Eigener Reserve-Materialbestand, unabhängig von den Mannschaften, zum Ausgleich von Verlusten – mit demselben Checkbox-Formular (Trikotsatz, Bälle, Leibchen, Sonstiges) wie unter \"Hinzufügen\".",
          "Umbuchung von Material zwischen Reserve und einer Mannschaft in beide Richtungen.",
          "Lückenloses Umbuchungsprotokoll mit Datum, Material, Menge, Richtung und Kommentar, filterbar nach Mannschaft und Richtung; einzelne Einträge löschbar."
        ]
      },
      {
        title: "Inventur & Vergleich",
        items: [
          "Stichtags-Inventur je Mannschaft oder Reserve: Soll-Bestand anzeigen, Ist-Menge erfassen, Abweichungen pro Position wahlweise übernehmen.",
          "Inventur-Historie aller bisherigen Stichtage.",
          "Vergleich zweier Stichtage derselben Mannschaft/Reserve mit Differenz-Darstellung (neu, entfallen, geändert, unverändert)."
        ]
      },
      {
        title: "Daten & Speicherung",
        items: [
          "Speicherort frei wählbar: lokale Datei per Datei-Picker (mit dauerhaft gemerkter Zugriffsberechtigung) oder Nextcloud per WebDAV (optional über einen CORS-Proxy) als mobile Alternative.",
          "Automatisches, datiertes Backup in einem wählbaren Ordner bei jedem App-Start.",
          "Zusätzlicher manueller JSON-Export/Import als Sicherheitskopie.",
          "Import aus Excel-Dateien (.xlsx) ohne benötigte Spaltenüberschrift."
        ]
      }
    ]
  }
];
