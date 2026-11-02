# Diario Zontes per Safari e iPhone

Questa cartella contiene solo il programma, senza spese o chilometraggio personali incorporati. Non servono ChatGPT, chiavi API o un account per usare il diario. Tutti i file HTML, CSS e JavaScript sono modificabili.

## Pubblicare con GitHub Pages

1. Su GitHub, dal pulsante **+**, scegli **New repository**.
2. Chiama il progetto **diario-zontes**, scegli **Public**, attiva **Add README** e premi **Create repository**.
3. Apri **Add file → Upload files**.
4. Estrai prima `Zontes-per-GitHub.zip` sul PC. Carica tutto il suo contenuto nella radice del progetto, compresa la cartella `assets`. Non caricare lo ZIP come singolo file e non inserire tutto dentro un'ulteriore cartella. `index.html` deve essere visibile nella pagina principale del progetto.
5. Premi **Commit changes**, confermando il caricamento nella branch principale.
6. Vai in **Settings → Pages**. In Source scegli **Deploy from a branch**, poi **main** e **/(root)**. Premi **Save**.
7. Attendi la pubblicazione. GitHub può richiedere fino a 10 minuti. Torna in Pages e apri **Visit site**: quello è l'indirizzo da usare su Safari.

Carica soltanto i file contenuti in questo ZIP. Il file `Zontes-backup-personale.json`, fornito separatamente, contiene i tuoi dati: non caricarlo nel progetto pubblico e non caricare il precedente HTML con le spese incorporate.

## Installare su iPhone

1. Apri l'indirizzo del sito pubblicato in Safari, con Internet attivo.
2. Tocca Condividi, eventualmente dal menu Altro, e **Aggiungi alla schermata Home**. Attiva **Apri come app web**, quindi Aggiungi.
3. Apri il diario dalla nuova icona. Attendi **Disponibile offline**: a quel punto le risorse del programma sono state salvate sul dispositivo.
4. Salva `Zontes-backup-personale.json` nell'app File del telefono. Nel diario premi **Importa backup**, selezionalo e conferma. Non aprire il backup o il precedente HTML per avviare il diario: usa sempre la nuova icona.
5. Ora puoi aggiungere e modificare spese, filtrare il registro e personalizzare colori, font e icone. Le modifiche restano sul telefono dopo la chiusura.

Se hai registrato altre spese dopo la copia inviata per questa preparazione, esporta un backup aggiornato dal diario del PC e importa quello al posto del file fornito.

## Dati, backup e codice

- Safari, l'app sulla Home e il PC possono avere archivi separati. Usa sempre la stessa icona. La sincronizzazione tra dispositivi non è attiva.
- Esporta regolarmente un backup e conservalo in File/iCloud Drive. Pulire i dati dei siti, rimuovere l'app o alcuni interventi del sistema può eliminare archivio e cache. L'uso offline dipende dalla conservazione di queste risorse.
- Il programma non invia le spese a GitHub. Il sito pubblico parte vuoto; ciascun browser conserva i propri dati. Chi riceve un tuo backup o un HTML esportato può leggerli.
- **Personalizza**, i due ripristini separati e **Cerca** sono conservati dalla versione ricevuta. **HTML completo** permette di modificare il testo del codice; su iPhone il salvataggio diretto nel file del computer non è disponibile. Usa **Scarica codice** per esportarlo. Modificare un HTML locale non aggiorna il sito: per cambiare il programma online occorre aggiornare i file su GitHub.
- Dopo un aggiornamento del programma, riapri il sito con Internet attivo. Le spese nel browser restano separate dal codice pubblicato. Non cambiare l'indirizzo del progetto o la chiave di archiviazione senza prima esportare un backup.

Preparato dalla versione HTML ricevuta il 2 novembre 2026. Verificati sintassi, separazione dei dati personali, inserimento, filtri e persistenza nell'anteprima browser. L'installazione su iPhone reale e l'offline HTTPS vanno verificati dopo la pubblicazione.

Documentazione ufficiale:
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://support.apple.com/it-it/guide/iphone/iphea86e5236/ios
