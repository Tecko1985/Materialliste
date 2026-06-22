const APP_VERSION = "1.0";

const APP_CHANGELOG = [
  {
    version: "1.0",
    groups: [
      {
        title: "Material",
        items: [
          "Material anlegen, inline bearbeiten, suchen und filtern (Name, Kategorie, Standort).",
          "Mehrere Zeilen aus Excel/Tabellen direkt einfügen und auf einmal einlesen.",
          "Import aus Excel-Dateien (.xlsx) ohne benötigte Spaltenüberschrift."
        ]
      },
      {
        title: "Daten & Speicherung",
        items: [
          "Speicherort frei wählbar: lokale Datei per Datei-Picker (mit dauerhaft gemerkter Zugriffsberechtigung) oder Nextcloud (WebDAV) als mobile Alternative.",
          "Automatisches, datiertes Backup bei jedem App-Start.",
          "Zusätzlicher manueller JSON-Export/Import als Sicherheitskopie."
        ]
      }
    ]
  }
];
