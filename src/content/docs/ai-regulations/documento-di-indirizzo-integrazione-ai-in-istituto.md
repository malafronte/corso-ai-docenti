---
title: Documento di Indirizzo per l'Artificiale nell’Istituto (bozza)
description: DOCUMENTO DI INDIRIZZO STRATEGICO PER L'INTEGRAZIONE DELL'INTELLIGENZA ARTIFICIALE NELL'ISTITUTO - Versione 1.0 - Anno 2025
sidebar:
  order: 30
---

## DOCUMENTO DI INDIRIZZO STRATEGICO PER L'INTEGRAZIONE DELL'INTELLIGENZA ARTIFICIALE NELL'ISTITUTO

- **Versione 1.0 -- Ottobre 2025**

## PREMESSA

Il presente Documento di Indirizzo Strategico (di seguito "Documento") è redatto in ottemperanza alle direttive nazionali ed europee in materia di Intelligenza Artificiale (IA) e si pone come strumento guida per l'integrazione consapevole, etica e normativamente corretta dei sistemi di IA all'interno del nostro Istituto. Redatto dall'Animatore Digitale, questo Documento è destinato a tutte le componenti della comunità scolastica -- Dirigenza, corpo docente, personale Amministrativo, Tecnico e Ausiliario (ATA), studenti e famiglie -- e si propone di delineare un percorso strutturato per l'adozione di tali tecnologie.

L'analisi e le indicazioni operative qui contenute si fondano su un esame rigoroso dei seguenti testi normativi e programmatici:

1. **Ministero dell'Istruzione e del Merito, "Linee guida per l'introduzione dell'Intelligenza Artificiale nelle Istituzioni scolastiche", Versione 1.0 - Anno 2025**[^2] (di seguito "Linee Guida MIM").

2. **Parlamento Europeo e Consiglio, "Regolamento (UE) 2024/1689 del 13 giugno 2024 che stabilisce regole armonizzate sull'intelligenza artificiale (regolamento sull'intelligenza artificiale)"**[^1], comunemente noto come **AI Act**.

Considerando che l'Istituto ha già avviato un percorso di formazione per i docenti sull'uso dell'IA nella didattica e ha prodotto analisi preliminari sui documenti di riferimento, il presente Documento si inserisce in una cornice di consapevolezza già parzialmente costruita. L'obiettivo è quello di sistematizzare le conoscenze acquisite, definire procedure operative chiare e stabilire un quadro di governance che assicuri un'implementazione dell'IA coerente con la nostra missione educativa e rispettosa dei diritti fondamentali di ogni individuo.

Questo testo è concepito come un documento "vivo", destinato ad essere discusso, integrato e aggiornato periodicamente dal Consiglio d'Istituto, in collaborazione con il Dirigente Scolastico, il Responsabile della Protezione dei Dati (DPO) e l'Animatore Digitale, per riflettere l'evoluzione tecnologica, normativa e le esigenze emergenti della nostra comunità.

## CAPITOLO 1: ANALISI DEL QUADRO NORMATIVO E DEI PRINCIPI GUIDA

### 1.1 Il Contesto Europeo: L'AI Act

L'AI Act[^1] rappresenta la prima legislazione orizzontale al mondo sull'Intelligenza Artificiale. Il suo scopo, come enunciato nell'**Articolo 1**, è quello di "migliorare il funzionamento del mercato interno e promuovere la diffusione di un'intelligenza artificiale (IA) antropocentrica e affidabile, garantendo nel contempo un livello elevato di protezione della salute, della sicurezza e dei diritti fondamentali". Per la scuola, questo si traduce in un obbligo non solo di cogliere le opportunità, ma anche di governare i rischi.

L'approccio del regolamento è basato sul rischio (*risk-based approach*), stratificando i sistemi di IA in diverse categorie:

#### 1.1.1 Pratiche di IA Vietate (Articolo 5)

L'**Articolo 5** dell'AI Act[^1] elenca una serie di pratiche considerate inaccettabili in quanto contrarie ai valori dell'Unione Europea. Per il contesto scolastico, è fondamentale comprendere e interdire categoricamente l'uso di sistemi che:

- **Utilizzano tecniche subliminali o manipolative** per distorcere il comportamento degli individui in modo da causare un danno significativo (Art. 5, par. 1, lett. a). Questo divieto è cruciale per proteggere l'autonomia di giudizio e la vulnerabilità psicologica degli studenti.

- **Sfruttano le vulnerabilità** di gruppi specifici (dovute a età, disabilità, situazione sociale o economica) per alterarne il comportamento in modo dannoso (Art. 5, par. 1, lett. b). La popolazione studentesca, in particolare i minori, rientra pienamente in questa categoria di protezione.

- **Effettuano "punteggio sociale" (social scoring)** da parte di autorità pubbliche o per loro conto, che porti a trattamenti pregiudizievoli o sproporzionati (Art. 5, par. 1, lett. c). Sebbene più orientato al rapporto cittadino-Stato, il principio di non classificazione aprioristica delle persone è un caposaldo etico da applicare anche in ambito educativo.

- **Inferiscono le emozioni di una persona fisica nell'ambito degli istituti di istruzione**, salvo per motivi medici o di sicurezza (Art. 5, par. 1, lett. f). Questo divieto è di diretta e cruciale applicazione per la scuola. È vietato, ad esempio, l'uso di software che pretendano di analizzare lo stato emotivo di uno studente durante una lezione o una verifica per valutarne l'attenzione o la sincerità. L'eccezione per motivi di sicurezza deve essere interpretata in modo estremamente restrittivo e sempre sotto supervisione umana qualificata.

- **Creano o ampliano banche dati di riconoscimento facciale mediante "scraping" non mirato** da internet o da filmati di telecamere a circuito chiuso (Art. 5, par. 1, lett. e).

#### 1.1.2 Sistemi di IA ad Alto Rischio (Articolo 6 e Allegato III)

Questa è la categoria di maggior interesse e impatto per le istituzioni scolastiche. Un sistema di IA è considerato ad alto rischio quando può avere un impatto significativo sulla vita delle persone. L'**Allegato III** dell'AI Act[^1] identifica esplicitamente i sistemi utilizzati nel settore "Istruzione e formazione professionale" come ad alto rischio. Nello specifico, rientrano in questa categoria i sistemi destinati a:

- **Determinare l'accesso, l'ammissione o l'assegnazione** di persone a istituti di istruzione (Allegato III, punto 3, lett. a). Ad esempio, un software che selezioni automaticamente le candidature per un corso a numero chiuso o che assegni gli studenti alle classi.

- **Valutare i risultati dell'apprendimento** (Allegato III, punto 3, lett. b). Rientrano qui i sistemi di correzione automatizzata di compiti o esami che abbiano un impatto determinante sulla valutazione finale dello studente.

- **Valutare il livello di istruzione adeguato** che una persona riceverà o a cui potrà accedere (Allegato III, punto 3, lett. c).

- **Monitorare e rilevare comportamenti vietati degli studenti durante le prove** (Allegato III, punto 3, lett. d). I software di *proctoring* che utilizzano l'IA per monitorare gli studenti durante gli esami a distanza sono un esempio lampante e devono essere trattati come sistemi ad alto rischio.

L'utilizzo di un sistema ad alto rischio impone al fornitore e all'utilizzatore (*deployer*), che nel nostro caso è la scuola, una serie di obblighi stringenti definiti nel **Capo III** dell'AI Act[^1], tra cui:

- Istituzione di un **sistema di gestione dei rischi** (Art. 9).

- Requisiti di **qualità e governance dei dati** di addestramento, convalida e test (Art. 10).

- Redazione di una **documentazione tecnica** dettagliata (Art. 11).

- **Conservazione delle registrazioni** (log) (Art. 12).

- **Trasparenza e fornitura di informazioni** agli utilizzatori (Art. 13).

- Garanzia di una **sorveglianza umana** efficace (Art. 14).

- Requisiti di **accuratezza, robustezza e cybersecurity** (Art. 15).

Per la scuola, in qualità di *deployer*, l'**Articolo 26**[^1] impone obblighi specifici, come utilizzare i sistemi secondo le istruzioni, garantire una sorveglianza umana competente, monitorare il funzionamento e, per le autorità pubbliche, registrarsi in un'apposita banca dati europea. Di fondamentale importanza è l'obbligo, per certi utilizzatori, di condurre una **Valutazione d'impatto sui diritti fondamentali** prima di mettere in uso il sistema (Art. 27[^1]).

#### 1.1.3 Sistemi di IA a Rischio Limitato (Articolo 50)

Questi sistemi sono soggetti a obblighi di trasparenza. Chi interagisce con essi deve essere consapevole di avere a che fare con una macchina. Esempi pertinenti per la scuola sono:

- **Chatbot** per l'orientamento o il supporto informativo: gli studenti devono essere informati che stanno dialogando con un sistema di IA (Art. 50, par. 1[^1]).

- Sistemi che generano **contenuti audio, video o testuali (deepfake)**: se un docente utilizza un sistema di IA per creare un video didattico con un avatar o per generare un testo che viene presentato come autentico, deve essere chiaramente indicato che il contenuto è stato generato artificialmente (Art. 50, par. 4[^1]).

### 1.2 Le Linee Guida del Ministero dell'Istruzione e del Merito

Le Linee Guida MIM[^2] traducono i principi europei nel contesto specifico della scuola italiana, fornendo una "cassetta degli attrezzi" concettuale e operativa. Esse si fondano su un modello a quattro pilastri (cfr. **Linee Guida MIM, par. 1.2**[^2]):

1. **Principi di riferimento**: Costituiscono la base etica per l'adozione dell'IA.

2. **Requisiti di base**: Definiscono le condizioni etiche, tecniche e normative.

3. **Framework di implementazione**: Forniscono un modello operativo per le scuole.

4. **Comunicazione e governance**: Indicano come gestire il processo di adozione.

#### 1.2.1 I Principi Fondanti (Linee Guida MIM, Cap. 2)

Il Documento ministeriale[^2] pone a fondamento della strategia sei principi cardine, che devono guidare ogni scelta dell'Istituto:

- **Centralità della persona**: "L'adozione dell'IA nelle scuole deve essere guidata da un approccio antropocentrico che metta al centro il pieno sviluppo della persona umana" (par. 2). Questo implica che la tecnologia è uno strumento, non il fine. La relazione educativa docente-studente rimane insostituibile. La sorveglianza umana non è solo un requisito tecnico, ma un imperativo pedagogico.

- **Equità**: L'IA deve "promuovere l'equità, garantendo che tutti abbiano pari accesso alle opportunità e ai benefici" (par. 2). Questo impone all'Istituto una vigilanza costante contro i *bias* algoritmici. Dobbiamo chiederci: gli strumenti che adottiamo sono addestrati su dati rappresentativi? Rischiano di penalizzare studenti con determinati background socio-culturali, linguistici o con bisogni educativi speciali?

- **Innovazione etica e responsabile**: L'IA deve "supportare la crescita personale e l'acquisizione di competenze autentiche, promuovendo l'apprendimento critico e creativo senza sostituire l'impegno, la riflessione e l'autonomia degli individui" (par. 2). L'uso dell'IA non deve diventare una scorciatoia per eludere lo sforzo cognitivo, ma uno strumento per potenziarlo.

- **Sostenibilità**: L'adozione dell'IA deve essere sostenibile a livello sociale, economico e ambientale. Ciò implica scegliere soluzioni che non creino un divario digitale, che siano economicamente gestibili nel lungo periodo e che tengano conto dell'impatto ecologico (es. consumo energetico dei modelli).

- **Tutela dei diritti e delle libertà fondamentali**: Si ribadisce la centralità della protezione dei dati personali (privacy), della riservatezza, della non discriminazione e della dignità. I principi di *privacy by design* e *privacy by default* sono richiamati come essenziali (par. 2).

- **Sicurezza dei sistemi e modelli di IA**: I sistemi devono garantire "elevati standard di sicurezza tecnica, proteggendo le infrastrutture digitali e i dati trattati da accessi non autorizzati, guasti, manipolazioni o attacchi informatici" (par. 2).

#### 1.2.2 Requisiti Normativi per la Protezione dei Dati (Linee Guida MIM, par. 3.3)

Le Linee Guida[^2] dedicano un'ampia e fondamentale sezione ai requisiti derivanti dal GDPR[^3] (Regolamento UE 2016/679). Per l'Istituto, che agisce come **Titolare del Trattamento**, questo paragrafo è un vademecum operativo. Ogni trattamento di dati personali tramite sistemi di IA deve rispettare i principi dell'Art. 5 del GDPR[^3]: liceità, correttezza, trasparenza, limitazione della finalità, minimizzazione dei dati, esattezza, limitazione della conservazione, integrità e riservatezza. Le Linee Guida[^2] sottolineano la particolare vulnerabilità dei minori (Considerando 38 e 75 del GDPR[^3]) e la necessità di una protezione specifica. Gli adempimenti chiave per la scuola sono:

- **Individuazione di una base giuridica specifica**: Il trattamento di dati personali è lecito solo se si fonda su una delle condizioni previste dall'Art. 6 del GDPR[^3]. Per un'istituzione scolastica pubblica, la base giuridica preminente è l'**Art. 6, par. 1, lett. e) del GDPR**[^3]: *"il trattamento è necessario per l'esecuzione di un compito di interesse pubblico o connesso all'esercizio di pubblici poteri di cui è investito il titolare del trattamento"*.

    - **Significato pratico**: L'interesse pubblico perseguito dalla scuola è la sua missione istituzionale: l'istruzione, l'educazione e la formazione degli studenti, come delineato dalla normativa di settore (es. D.Lgs. 297/1994, L. 107/2015). Qualsiasi trattamento di dati, anche tramite IA, deve essere *strettamente necessario* e *proporzionato* al raggiungimento di tali finalità educative e amministrative.

    - **Esempio concreto 1 (Lecito)**: Utilizzare un software di IA per analizzare i risultati anonimizzati delle prove INVALSI al fine di identificare le aree di debolezza a livello di istituto e pianificare interventi didattici mirati. Questo rientra pienamente nel compito di interesse pubblico di migliorare l'offerta formativa.

    - **Esempio concreto 2 (Illecito)**: Utilizzare un sistema di IA per monitorare l'attività degli studenti sui social network personali al fine di prevederne il comportamento a scuola. Tale trattamento sarebbe sproporzionato, eccederebbe le finalità istituzionali della scuola e mancherebbe quindi di una valida base giuridica.

    - **Nota sul consenso**: Si deve evitare di fare affidamento sul consenso (Art. 6, par. 1, lett. a) del GDPR[^3]) come base giuridica per i trattamenti essenziali, a causa del chiaro squilibrio di potere tra l'istituzione scolastica e l'interessato (studente/famiglia). Il consenso potrebbe non essere considerato "liberamente prestato". Può essere utilizzato solo per attività puramente facoltative e non essenziali.

- **Esecuzione di una Valutazione di Impatto sulla Protezione dei Dati (DPIA) e sui Diritti Fondamentali (FRIA)**: Come indicato nelle Linee Guida MIM[^2], l'uso di sistemi di IA in ambito scolastico rende **obbligatoria** una DPIA ai sensi dell'Art. 35 del GDPR[^3], in quanto si tratta di un "uso di nuove tecnologie" che può comportare un "rischio elevato". Per i sistemi classificati ad "alto rischio" dall'AI Act[^1], questa valutazione deve essere integrata con gli elementi di una FRIA (Art. 27 AI Act[^1]).

    - **Scopo**: La DPIA/FRIA non è un mero adempimento burocratico, ma un'analisi sistematica che l'Istituto deve compiere *prima* di adottare un sistema di IA per comprenderne e mitigarne i rischi.

    - **Procedura e contenuti minimi**:

        1. **Descrizione del trattamento**: Descrivere in dettaglio il sistema di IA, i dati che tratta (es. voti, risposte a test, dati comportamentali), le finalità (es. personalizzazione, valutazione), gli attori coinvolti e i tempi di conservazione.

        2. **Valutazione di necessità e proporzionalità**: Dimostrare perché l'uso dell'IA è necessario per raggiungere l'obiettivo prefissato e perché non esistono alternative meno intrusive.

        3. **Analisi dei rischi per i diritti e le libertà**: Identificare i potenziali rischi.

            - *Esempi di rischio*:

                - **Discriminazione algoritmica (Bias)**: Un software di valutazione potrebbe penalizzare sistematicamente studenti con background linguistici non standard.

                - **Violazione della privacy**: Un data breach potrebbe esporre dati accademici e personali sensibili.

                - **Errore di valutazione**: Un sistema di correzione automatica potrebbe non comprendere una risposta corretta ma formulata in modo creativo.

                - **Effetto di sorveglianza (*chilling effect*)**: La percezione di essere costantemente monitorati da un'IA potrebbe inibire la creatività e l'assunzione di rischi intellettuali da parte degli studenti.

        4. **Individuazione delle misure di mitigazione**: Definire le contromisure tecniche e organizzative.

            - *Esempi di misure*:

                - **Tecniche**: Pseudonimizzazione dei dati, crittografia, audit periodici del fornitore.

                - **Organizzative**: Previsione obbligatoria della supervisione umana su ogni decisione critica, formazione dei docenti sui limiti dello strumento, definizione di una procedura chiara e accessibile per studenti e famiglie per contestare una decisione automatizzata e richiedere una revisione umana.

    - **Esempio Pratico (DPIA/FRIA per un software di *proctoring*)**:

        - **Rischio (FRIA - Diritto alla privacy e alla non discriminazione)**: Il software analizza il volto e i suoni ambientali. Rischia di violare la privacy dello spazio domestico e di segnalare come "sospetti" comportamenti legati a condizioni di neurodivergenza (es. movimenti ripetitivi).

        - **Misure di mitigazione**: Utilizzare il software solo per le verifiche sommative finali e non per quelle formative; informare dettagliatamente gli studenti su quali dati vengono raccolti e perché; garantire che ogni segnalazione di "comportamento sospetto" da parte dell'IA sia sempre e solo un allarme per il docente, che ha l'obbligo di verificare il contesto prima di prendere qualsiasi decisione, senza alcun automatismo sanzionatorio.

- **Rilascio di un'idonea informativa**: Gli interessati (studenti, famiglie, personale) devono ricevere un'informativa chiara, concisa e comprensibile sul trattamento dei loro dati tramite IA (Artt. 13-14 GDPR[^3]). Il linguaggio deve essere "facilmente comprensibile anche da minori".

- **Nomina dei soggetti autorizzati al trattamento**: Il personale docente e amministrativo che utilizza sistemi di IA deve essere formalmente autorizzato e istruito (Art. 29 GDPR[^3]).

- **Nomina dei responsabili del trattamento**: I fornitori esterni di servizi di IA che trattano dati per conto della scuola devono essere nominati Responsabili del Trattamento tramite un contratto conforme all'Art. 28 del GDPR[^3].

- **Adozione di misure tecnico-organizzative adeguate** (Art. 32 GDPR[^3]), inclusi i principi di *privacy by design* e *by default*.

### 1.3 Sintesi dei Vincoli e delle Opportunità per l'Istituto

Dall'analisi congiunta dei due documenti, emerge un quadro chiaro di vincoli e opportunità.

**Vincoli Imprescindibili:**

1. **Divieto Assoluto**: Non è possibile, in alcun caso, utilizzare sistemi di IA che rientrano nelle pratiche vietate dall'Art. 5 dell'AI Act[^1] (es. sistemi di analisi delle emozioni, social scoring).

2. **Gestione del Rischio Elevato**: Qualsiasi sistema di IA utilizzato per valutazione, ammissione, o monitoraggio degli studenti durante le prove deve essere gestito come "ad alto rischio". Questo attiva una serie di oneri procedurali e documentali non derogabili (DPIA/FRIA, documentazione tecnica, sorveglianza umana, ecc.).

3. **Conformità al GDPR**: Ogni applicazione di IA che tratti dati personali (quasi tutte in ambito scolastico) deve essere rigorosamente conforme al GDPR[^3]. La DPIA è la regola, non l'eccezione.

4. **Trasparenza Obbligatoria**: L'interazione con chatbot e la fruizione di contenuti generati da IA devono essere sempre rese esplicite all'utente.

5. **Centralità e Responsabilità Umana**: Nessuna decisione critica (es. una valutazione, un'ammissione, una sanzione disciplinare) può essere completamente delegata a un sistema di IA. La decisione finale e la responsabilità rimangono umane. "La sorveglianza umana consente di identificare tempestivamente anomalie, errori o discriminazioni" (Linee Guida MIM, par. 3.1[^2]).

**Opportunità da Cogliere:**

1. **Personalizzazione della Didattica**: L'IA può essere uno strumento potente per "migliorare l'apprendimento e valorizzare potenzialità, talenti e inclinazioni individuali degli studenti" (Linee Guida MIM, par. 1.1[^2]). Questo si allinea perfettamente con le esigenze dei diversi indirizzi del nostro Istituto.

2. **Promozione dell'Inclusione**: Se usata correttamente, l'IA può fornire supporti mirati per studenti con Bisogni Educativi Speciali (BES) e Disturbi Specifici dell'Apprendimento (DSA), "potenziando i processi di integrazione" (Linee Guida MIM, par. 1.1[^2]).

3. **Ottimizzazione dei Processi Amministrativi**: L'IA può "semplificare e ottimizzare i processi interni ![](data:,) attraverso l'automazione e la digitalizzazione delle attività amministrative" (Linee Guida MIM, par. 1.1[^2]), liberando risorse umane per compiti a maggior valore aggiunto.

4. **Sviluppo di Competenze Chiave**: L'introduzione guidata dell'IA è un'occasione formativa unica per sviluppare negli studenti (e nei docenti) le competenze del XXI secolo: pensiero critico, alfabetizzazione digitale (*AI literacy*), capacità di risolvere problemi complessi e creatività.

## CAPITOLO 2: QUADRO OPERATIVO E AZIONI DA INTRAPRENDERE

Sulla base dell'analisi normativa e in coerenza con il framework di implementazione proposto dalle Linee Guida MIM (par. 4.1[^2]), si definisce di seguito il piano d'azione per l'Istituto, articolato per ruoli e responsabilità. Per un'analisi dettagliata di uno scenario concreto, si rimanda al **Capitolo 3**.

### 2.1 Azioni per la Governance Strategica (Dirigente Scolastico e Consiglio d'Istituto)

Il Dirigente Scolastico, in qualità di "responsabilità primaria nella governance dei sistemi di IA adottati" (Linee Guida MIM, par. 3.1[^2]), e il Consiglio d'Istituto, come organo di indirizzo, sono chiamati a guidare il processo.

**Azioni Concrete:**

1. **Istituzione di un "Gruppo di Lavoro per l'IA"**:

    - **Composizione**: Presieduto dal Dirigente Scolastico, composto da: Animatore Digitale (coordinatore), DPO, un docente referente per ogni indirizzo di studio, il Direttore dei Servizi Generali e Amministrativi (DSGA), un rappresentante dell'ufficio tecnico, rappresentanti di studenti e genitori.

    - **Mandato**:

        - Effettuare una mappatura dei bisogni e delle opportunità di applicazione dell'IA nei diversi ambiti (didattica, amministrazione, supporto).

        - Valutare le proposte di adozione di nuovi strumenti di IA, verificandone la coerenza con il PTOF e con il presente Documento.

        - Supervisionare l'attuazione delle procedure definite, in particolare per i sistemi ad alto rischio.

        - Proporre aggiornamenti al presente Documento.

    - **Tempistica**: Istituzione entro 30 giorni dall'approvazione del presente Documento.

2. **Integrazione dell'IA nei Documenti Strategici dell'Istituto (PTOF, RAV)**:

    - **Azione**: Revisionare e integrare il PTOF e il RAV per allineare la programmazione e l'autovalutazione d'istituto alla strategia di adozione dell'IA.

    - **Integrazione nel PTOF**: Il PTOF dovrà recepire la visione strategica dell'Istituto sull'IA, articolandola in scelte concrete. Nello specifico, dovranno essere integrati i seguenti ambiti:

        - **Curricolo di Educazione Civica Digitale**: Definire traguardi di competenza specifici sull'IA, come:

            - *Pensiero Critico*: Saper analizzare e valutare criticamente gli output dei sistemi di IA (riconoscere "allucinazioni", bias, informazioni obsolete).

            - *Consapevolezza Etica*: Comprendere le implicazioni etiche dell'uso dell'IA (privacy, equità, impatto sociale).

            - *Uso Responsabile*: Applicare l'IA in modo onesto, citando correttamente il suo contributo e rispettando il diritto d'autore.

        - **Integrazione Didattica Trasversale**: Indicare come l'IA verrà utilizzata quale strumento a supporto della didattica nei diversi indirizzi, non solo come oggetto di studio. Ad esempio, specificare l'uso di modelli predittivi in chimica o di analisi dati in scienze economiche.

        - **Piano di Formazione del Personale**: Inserire nel piano di formazione (ex L. 107/2015) i percorsi specifici sull'IA, come delineato nell'azione 2.3.1 del presente documento, garantendone la coerenza con gli obiettivi di miglioramento.

        - **Strategie per l'Inclusione**: Esplicitare come gli strumenti di IA verranno impiegati per supportare gli studenti con BES e DSA (es. software di sintesi vocale avanzata, piattaforme adattive), in coerenza con i Piani Educativi Individualizzati (PEI) e i Piani Didattici Personalizzati (PDP).

        - **Criteri di Valutazione**: Dichiarare i principi per l'uso di strumenti di IA nei processi valutativi, ribadendo la centralità del giudizio del docente e il diritto dello studente alla trasparenza.

    - **Integrazione nel RAV**: Il processo di autovalutazione dovrà tenere conto dell'introduzione dell'IA.

        - **Area "Esiti degli studenti"**: Utilizzare strumenti di analisi dati basati su IA (in modo aggregato e anonimo) per una lettura più approfondita dei risultati scolastici e delle prove standardizzate, al fine di individuare punti di forza e di debolezza. Parallelamente, valutare l'impatto che l'uso di strumenti di IA ha sugli apprendimenti.

        - **Area "Processi - Pratiche educative e didattiche"**: Inserire indicatori per monitorare il livello di adozione dell'IA nella didattica, la coerenza delle pratiche con le linee guida d'istituto e il feedback di studenti e docenti sull'efficacia degli strumenti.

        - **Area "Processi - Ambiente di apprendimento"**: Valutare l'adeguatezza delle infrastrutture tecnologiche per supportare l'uso dell'IA.

    - **Tempistica**: In occasione del prossimo aggiornamento annuale del PTOF e del ciclo di autovalutazione del RAV.

3. **Definizione di un Budget Dedicato**:

    - **Azione**: Stanziamento di fondi specifici per l'acquisizione di licenze software, la formazione del personale e l'eventuale adeguamento delle infrastrutture tecnologiche, in coerenza con il Programma Annuale.

    - **Tempistica**: A partire dal prossimo esercizio finanziario.

4. **Promozione di una Cultura della Responsabilità**:

    - **Azione**: Il Dirigente Scolastico promuove attivamente, tramite circolari, incontri e comunicazioni, una cultura dell'uso etico e consapevole dell'IA, sottolineando tanto le potenzialità quanto i rischi e le responsabilità individuali.

    - **Tempistica**: Continuativa.

5. **Formalizzazione negli Atti di Indirizzo e Regolamentari**:

    - **Azione**: Tradurre la strategia sull'IA in atti formali vincolanti per la comunità scolastica.

    - **Atto di Indirizzo del Dirigente Scolastico per il PTOF**: Il DS, nell'atto di indirizzo annuale per l'elaborazione del PTOF, dovrà esplicitare le priorità strategiche relative all'integrazione dell'IA, invitando il Collegio Docenti a declinarle in obiettivi specifici e azioni concrete, in linea con il presente Documento.

    - **Delibere del Consiglio d'Istituto**: Il Consiglio d'Istituto è chiamato a:

        - Approvare formalmente il presente "Documento di Indirizzo Strategico per l'Integrazione dell'IA" e le sue successive revisioni.

        - Aggiornare il **Regolamento d'Istituto** e il **Patto di Corresponsabilità Educativa**, inserendo norme chiare sull'uso corretto e responsabile dell'IA da parte di studenti e docenti, con particolare riferimento all'onestà accademica (anti-plagio) e al rispetto della privacy.

        - Approvare, nell'ambito del Programma Annuale, le specifiche allocazioni di budget per le azioni previste nel piano (formazione, acquisto software, ecc.).

    - **Tempistica**: Approvazione del presente documento e aggiornamento del Regolamento d'Istituto entro l'anno scolastico in corso. Atto di indirizzo da emanare in vista della prossima progettazione del PTOF.

### 2.2 Azioni per la Conformità Normativa (Responsabile della Protezione dei Dati - DPO)

Il DPO è la figura cardine per garantire la conformità al GDPR[^3] e all'AI Act[^1]. Agisce in stretta sinergia con il Gruppo di Lavoro per l'IA.

**Azioni Concrete:**

1. **Creazione di un "Registro dei Trattamenti IA"**:

    - **Azione**: Istituire e mantenere una sezione specifica del Registro delle Attività di Trattamento (ex Art. 30 GDPR[^3]) dedicata ai sistemi di IA.

    - **Contenuti**: Per ogni sistema di IA che tratta dati personali, il registro dovrà specificare: finalità, base giuridica, categorie di dati e interessati, eventuale classificazione di rischio (alto, limitato), misure di sicurezza, tempi di conservazione.

    - **Tempistica**: Da avviare immediatamente e aggiornare a ogni nuova adozione.

2. **Sviluppo di una Procedura Standard per la Valutazione d'Impatto (DPIA/FRIA)**:

    - **Azione**: Definire un modello di DPIA standard per l'Istituto, che integri gli elementi della FRIA richiesti dall'Art. 27 dell'AI Act[^1] per i sistemi ad alto rischio.

    - **Procedura**:

        1. Il docente/ufficio proponente l'adozione di un nuovo strumento di IA compila una scheda preliminare di valutazione del rischio.

        2. Se lo strumento è potenzialmente ad "alto rischio" o tratta dati su larga scala, il DPO, in collaborazione con il Gruppo di Lavoro, avvia la procedura di DPIA/FRIA completa.

        3. La DPIA/FRIA deve analizzare: necessità e proporzionalità del trattamento, rischi per i diritti e le libertà, rischi di bias e discriminazione, misure previste per mitigare i rischi.

        4. L'adozione dello strumento è subordinata all'esito positivo della DPIA.

    - **Tempistica**: Modulistica e procedura da definire entro 60 giorni.

3. **Revisione e Stesura di Accordi con i Fornitori**:

    - **Azione**: Il DPO, in collaborazione con il DSGA, deve verificare che tutti i contratti con fornitori di servizi di IA siano conformi all'Art. 28 del GDPR[^3] (nomina a Responsabile del Trattamento).

    - **Verifiche Aggiuntive**: I contratti devono specificare chiaramente:

        - Garanzie sulla sicurezza e sulla localizzazione dei dati (preferibilmente all'interno dello SEE).

        - Obblighi del fornitore in merito alla trasparenza dell'algoritmo (se sistema ad alto rischio).

        - Procedure per la notifica di data breach.

        - Impegno del fornitore a non utilizzare i dati della scuola per addestrare i propri modelli per altri clienti.

    - **Tempistica**: Continuativa, per ogni nuovo contratto o rinnovo.

4. **Aggiornamento delle Informative Privacy**:

    - **Azione**: Predisporre e diffondere informative privacy (per studenti/famiglie e personale) che menzionino esplicitamente l'uso di sistemi di IA, le finalità, i dati trattati e i diritti degli interessati, con un linguaggio semplice e accessibile.

    - **Tempistica**: Entro 90 giorni, e successivamente ad ogni modifica sostanziale dei trattamenti.

### 2.3 Azioni per l'Implementazione e il Supporto (Animatore Digitale e Ufficio Tecnico)

L'Animatore Digitale coordina l'implementazione didattica, mentre l'Ufficio Tecnico garantisce il supporto infrastrutturale e la sicurezza.

**Azioni Concrete (Animatore Digitale):**

1. **Coordinamento della Formazione Continua**:

    - **Azione**: Progettare, in collaborazione con il Dirigente, un piano di formazione pluriennale, differenziato per livelli di competenza, per docenti e personale ATA.

    - **Contenuti**:

        - **Livello Base (per tutti)**: Principi etici e normativi (AI Act, GDPR), rischi (bias, privacy, disinformazione), uso sicuro degli strumenti di IA generativa.

        - **Livello Intermedio (per docenti interessati)**: Sperimentazione di strumenti di IA specifici per la propria disciplina, tecniche di *prompt design*.

        - **Livello Avanzato (per referenti di dipartimento/gruppo di lavoro)**: Analisi critica degli strumenti, progettazione di attività didattiche innovative con l'IA.

    - **Tempistica**: Piano da presentare entro 3 mesi.

2. **Creazione di una "Software Library" Scolastica**:

    - **Azione**: Curare un elenco ragionato e approvato di strumenti e applicazioni di IA.

    - **Contenuti**: Per ogni strumento, la libreria indicherà: descrizione, finalità didattica, indirizzi di studio pertinenti, livello di rischio (con link alla relativa DPIA), guida rapida all'uso, licenza d'uso.

    - **Scopo**: Orientare i docenti verso strumenti già valutati e sicuri, evitando l'uso incontrollato di software non verificati.

    - **Tempistica**: Avvio immediato, aggiornamento continuo.

3. **Supporto alla Sperimentazione Didattica**:

    - **Azione**: Animare workshop e gruppi di lavoro per dipartimenti per sviluppare Unità di Apprendimento (UDA) che integrino l'IA in modo critico e creativo.

    - **Esempi pratici per indirizzo**:

        - **Liceo Linguistico**: Uso di traduttori IA avanzati non per "copiare", ma per analizzare comparativamente le traduzioni, identificare sfumature e limiti della macchina. Creazione di dialoghi con chatbot in lingua per esercitare la conversazione.

        - **Liceo delle Scienze Umane**: Analisi critica di articoli generati da IA su temi socio-pedagogici per individuare bias e stereotipi. Uso di IA per simulare sondaggi e analizzare grandi dataset testuali (es. social media) su fenomeni sociali.

        - **Liceo Economico Sociale**: Utilizzo di strumenti di IA per l'analisi predittiva di serie storiche economiche e la visualizzazione di dati complessi. Simulazione di campagne di marketing basate su analisi di mercato generate da IA.

        - **Indirizzo Informatico-Telecomunicazioni**: Oltre all'uso, lo studio del *funzionamento* dell'IA. Progetti di *machine learning* (es. classificazione di immagini, analisi del sentiment) utilizzando librerie open-source. Analisi etica degli algoritmi e dei loro impatti.

        - **Indirizzo Chimico**: Uso di software IA per la modellizzazione molecolare, la predizione delle proprietà dei composti o l'analisi di dati da spettrometri. Ricerca assistita da IA su database di pubblicazioni scientifiche.

    - **Tempistica**: Avvio di almeno un progetto pilota per dipartimento entro l'anno scolastico in corso.

**Azioni Concrete (Ufficio Tecnico):**

1. **Valutazione dell'Infrastruttura**:

    - **Azione**: Verificare che la rete e l'hardware dell'Istituto siano adeguati a supportare l'uso degli strumenti di IA previsti, in particolare per quanto riguarda la banda e la capacità di calcolo.

    - **Tempistica**: Entro 2 mesi.

2. **Gestione della Sicurezza Informatica**:

    - **Azione**: Implementare misure di sicurezza per proteggere i sistemi di IA e i dati da essi trattati, in linea con il principio di "Sicurezza dei sistemi" delle Linee Guida MIM (par. 2[^2]). Ciò include: gestione degli accessi, aggiornamenti, monitoraggio della rete, procedure di backup.

    - **Tempistica**: Continuativa.

3. **Supporto Tecnico**: Fornire assistenza a docenti e personale per l'installazione e la configurazione degli strumenti approvati nella "Software Library".

### 2.4 Azioni per l'Uso Didattico e la Formazione (Docenti)

I docenti sono gli attori principali nell'integrazione dell'IA nel processo di apprendimento.

**Azioni Concrete:**

1. **Formazione Personale Continua**: Partecipare attivamente alle iniziative di formazione proposte dall'Istituto per acquisire le competenze necessarie.

2. **Uso Responsabile degli Strumenti**:

    - Utilizzare prioritariamente gli strumenti presenti nella "Software Library" scolastica.

    - Prima di utilizzare un nuovo strumento non presente in elenco, segnalarlo all'Animatore Digitale per avviare la procedura di valutazione.

    - Rispettare scrupolosamente le normative sulla privacy e sul diritto d'autore. Non inserire dati personali di studenti o terzi in sistemi di IA generativa pubblici, se non in ambienti controllati e approvati dalla scuola.

3. **Progettazione Didattica Critica**:

    - Integrare l'IA non come sostituto del pensiero, ma come "compagno cognitivo" (*cognitive partner*). Progettare attività che richiedano agli studenti di valutare, criticare, correggere e migliorare gli output dell'IA.

    - Educare esplicitamente gli studenti sui rischi dell'IA (allucinazioni, bias, privacy, impatto ambientale).

    - Promuovere l'onestà accademica, definendo chiaramente in quali compiti è consentito l'uso dell'IA e come deve essere citato il suo contributo.

4. **Valutazione Umana e Trasparente**:

    - Se si utilizzano strumenti di IA per la valutazione (es. correzione di quiz), essi devono essere considerati come un supporto. La valutazione finale e il giudizio rimangono una prerogativa e una responsabilità del docente.

    - Gli studenti hanno il diritto di comprendere i criteri di valutazione, anche quando mediati da uno strumento automatico. Il docente deve essere in grado di spiegare perché il sistema ha prodotto un certo risultato.

### 2.5 Azioni per l'Apprendimento e la Partecipazione (Studenti)

Gli studenti sono i destinatari finali, ma anche attori attivi del processo.

**Azioni Concrete:**

1. **Partecipazione Attiva**: Contribuire, tramite i propri rappresentanti nel Gruppo di Lavoro e nei Consigli di Classe/Istituto, a esprimere bisogni e feedback sull'uso dell'IA.

2. **Sviluppo di un'Etica Digitale**:

    - Utilizzare gli strumenti di IA in modo onesto e responsabile, rispettando le indicazioni dei docenti e il regolamento d'istituto.

    - Comprendere la differenza tra usare l'IA come strumento di supporto e usarla per plagiare.

    - Segnalare ai docenti o al personale eventuali output problematici, discriminatori o errati generati dai sistemi di IA.

3. **Protezione dei Propri Dati**: Essere consapevoli di quali dati personali vengono condivisi con i sistemi di IA e perché. Esercitare i propri diritti alla privacy.

### 2.6 Azioni per la Collaborazione e l'Informazione (Famiglie)

Le famiglie sono un alleato fondamentale per promuovere un uso sano e consapevole delle nuove tecnologie.

**Azioni Concrete:**

1. **Informazione**: Prendere visione delle informative privacy e dei documenti prodotti dalla scuola sull'uso dell'IA.

2. **Dialogo Educativo**: Dialogare con i propri figli sui temi dell'IA, promuovendo un uso equilibrato e critico delle tecnologie anche in ambito domestico.

3. **Partecipazione**: Partecipare agli incontri informativi organizzati dalla scuola e contribuire, tramite i rappresentanti, al dibattito sull'integrazione dell'IA.

### 2.7 Azioni per il Personale Amministrativo (DSGA e Personale ATA)

L'ottimizzazione dei processi interni è uno degli obiettivi chiave.

**Azioni Concrete:**

1. **Mappatura dei Processi Automatizzabili**: Il DSGA, in collaborazione con il personale, individua le attività amministrative ripetitive che potrebbero beneficiare dell'automazione tramite IA (es. smistamento iniziale di email, generazione di bozze di comunicazioni standard, gestione dell'inventario).

2. **Formazione Specifica**: Partecipare a corsi di formazione sull'uso di strumenti di IA per l'ufficio, con un focus sulla sicurezza dei dati e sulla privacy.

3. **Sperimentazione Controllata**: Avviare progetti pilota su piccola scala per testare l'efficacia di uno strumento di IA prima di un'adozione generalizzata, sempre sotto la supervisione del DPO per i profili di trattamento dati.

## CAPITOLO 3: SCENARIO APPLICATIVO: ANALISI DI UN CASO D'USO REALE

Per tradurre i principi e le azioni generali in pratiche concrete, questo capitolo analizza uno scenario d'uso ipotetico ma altamente realistico per il nostro Istituto. L'obiettivo è fornire una guida operativa dettagliata che possa essere replicata e adattata per le diverse iniziative che verranno intraprese.

### 3.1 Descrizione dello Scenario

L'Istituto decide di avviare un progetto pilota per l'integrazione di strumenti di IA generativa a supporto della didattica e dell'amministrazione. Gli usi previsti sono:

- **Per i Docenti**:

    1. **Supporto alla Progettazione**: Utilizzo di modelli linguistici avanzati (LLM) per generare bozze di unità didattiche, dispense, esercizi differenziati e slide, da utilizzare come base di lavoro per lezioni frontali e metodologie attive (Flipped Classroom, Debate, ecc.).

    2. **Creazione di Materiale Adattivo**: Uso di IA per adattare testi e materiali didattici per studenti con Bisogni Educativi Speciali (BES, DSA, ADHD), ad esempio semplificando il linguaggio o creando mappe concettuali. Questa attività è sempre svolta con la supervisione del docente curricolare e/o di sostegno.

    3. **Sviluppo di Strumenti di Valutazione**: Generazione di bozze di verifiche e di griglie di valutazione (rubric) per diverse tipologie di prove (scritte, orali, pratiche).

    4. **Creazione di Tutor Virtuali (Chatbot)**: I docenti, utilizzando piattaforme come Microsoft 365 Copilot, NotebookLM o Perplexity Spaces, creano chatbot personalizzati. Questi tutor sono "addestrati" su una base di conoscenza specifica fornita dal docente (dispense, libri di testo, appunti) tramite tecnologia RAG (Retrieval-Augmented Generation). Gli scopi sono:

        - Fornire un "tutor socratico" che guidi gli studenti nel ragionamento (es. in Matematica).

        - Creare un "esperto" su un argomento specifico (es. in Chimica).

        - Offrire supporto agli studenti per la risoluzione di esercizi a casa.

- **Per gli Studenti**:

    1. **Utilizzo Guidato**: Gli studenti interagiscono con i chatbot creati e messi a disposizione dai loro docenti. L'interazione avviene in un ambiente controllato, con prompt di sistema pre-impostati dal docente per garantire pertinenza e sicurezza.

- **Per il Personale Amministrativo**:

    1. **Gestione Documentale**: Utilizzo di strumenti di IA per riassumere circolari ministeriali, classificare documenti in entrata e redigere bozze di comunicazioni standard per le famiglie.

### 3.2 Analisi del Rischio e Conformità (AI Act)

Il primo passo fondamentale è classificare il rischio di ogni attività secondo l'AI Act[^1].

1. **Preparazione di Materiale Didattico, Verifiche e Griglie (Usi Docenti 1, 2, 3, 4)**:

    - **Classificazione**: **BASSO RISCHIO**.

    - **Motivazione**: In questi casi, l'IA è uno strumento di produttività per il docente. L'output dell'IA (una dispensa, una verifica, una rubric) non viene somministrato direttamente allo studente in modo automatico. È sempre il docente che **valida, modifica, personalizza e si assume la piena responsabilità** del materiale finale. L'IA non prende alcuna decisione autonoma che impatti lo studente. La **sorveglianza umana** non è solo presente, è totale.

2. **Creazione e Uso di Tutor Virtuali/Chatbot (Usi Docenti 4 e Studenti 1)**:

    - **Classificazione**: **RISCHIO LIMITATO**.

    - **Motivazione**: Il chatbot interagisce direttamente con lo studente. Pertanto, scatta l'obbligo di trasparenza dell'**Art. 50 dell'AI Act**[^1]: lo studente deve essere chiaramente informato che sta interagendo con un sistema di IA. Il rischio non è "alto" perché il chatbot ha un ruolo di **supporto** e non di **valutazione**. Non rientra nell'Allegato III, punto 3, lett. b) ("valutare i risultati dell'apprendimento") perché non assegna voti né produce giudizi che confluiscono nella valutazione formale. La sua funzione è formativa.

    - **Linea di confine critica**: Se il chatbot fosse modificato per tracciare le performance degli studenti e generare un "punteggio di preparazione" che il docente poi utilizza per la valutazione, il sistema diventerebbe ad **ALTO RISCHIO**.

3. **Gestione Documentale Amministrativa (Uso Personale Amministrativo)**:

    - **Classificazione**: **BASSO RISCHIO**.

    - **Motivazione**: Similmente all'uso da parte dei docenti, l'IA è uno strumento di supporto. La bozza di una circolare viene sempre revisionata e firmata dal Dirigente o dal DSGA. L'IA non prende decisioni autonome con effetti giuridici sui cittadini.

### 3.3 Piano d'Azione Operativo e Adempimenti Normativi

Seguendo il framework delle Linee Guida MIM[^2], ecco i passi concreti per implementare questo scenario.

#### Fase 1: Pianificazione e Analisi Preliminare (Ruoli: Gruppo di Lavoro IA, DPO)

1. **Selezione della Piattaforma**: Il Gruppo di Lavoro, con il supporto dell'Ufficio Tecnico, seleziona le piattaforme per la creazione dei chatbot e gli strumenti per la generazione di contenuti. I criteri di selezione devono includere: robustezza, facilità d'uso e, soprattutto, **garanzie di protezione dei dati**. (Vedi approfondimento in sez. 3.6).

2. **Svolgimento della DPIA (obbligatorio)**: Il DPO, con il Gruppo di Lavoro, redige la DPIA per l'uso delle piattaforme selezionate. La DPIA deve affrontare specificamente:

    - **Trattamento Dati da Parte del Fornitore**: Quali dati vengono inviati al fornitore del servizio IA? I prompt degli studenti? I documenti caricati dai docenti? I dati vengono usati per addestrare i loro modelli globali?

    - **Rischio di Immissione di Dati Personali**: Gli studenti potrebbero inserire dati personali nei prompt, violando il principio di minimizzazione.

    - **Finalità e Base Giuridica**: Si conferma che la base giuridica è l'**Art. 6(1)(e) GDPR**[^3] (compito di interesse pubblico) e che la finalità è il supporto didattico e formativo.

    - **Misure di Mitigazione**:

        - Stipula di un **Accordo sul Trattamento dei Dati (DPA - Art. 28 GDPR[^3])** con il fornitore.

        - Scelta di versioni "enterprise" o "education" dei servizi che offrono maggiori controlli sulla privacy.

        - Redazione di una **policy d'uso chiara** per studenti e docenti.

        - Configurazione dei chatbot con un **messaggio di avvio** che ricordi di non inserire dati personali.

#### Fase 2: Adozione e Implementazione (Ruoli: Animatore Digitale, Docenti, Personale ATA)

1. **Formazione Specifica**: L'Animatore Digitale organizza sessioni di formazione mirate:

    - **Per i docenti**: Come scrivere prompt efficaci (*prompt engineering*), come usare le piattaforme per creare chatbot RAG, come valutare criticamente l'output dell'IA, come rispettare la policy sulla privacy.

    - **Per gli studenti**: Durante le ore di Educazione Civica, spiegare cosa sono i chatbot, come funzionano, quali sono i loro limiti ("allucinazioni") e l'importanza di non condividere informazioni personali.

    - **Per il personale ATA**: Formazione su strumenti specifici per l'automazione d'ufficio.

2. **Creazione dei Contenuti e dei Chatbot**: I docenti del gruppo pilota, supportati dall'Animatore Digitale, caricano i loro materiali didattici sulle piattaforme e configurano i chatbot, definendo il prompt di sistema (es. "Sei un tutor socratico di matematica. Non dare mai la risposta diretta, ma guida lo studente con domande. Rispondi solo su argomenti presenti nei documenti forniti. Ricorda all'utente di non inserire dati personali.").

3. **Aggiornamento della Documentazione**:

    - Il **Registro dei Trattamenti** viene aggiornato dal DPO.

    - L'**Informativa Privacy** per studenti e famiglie viene integrata con una sezione chiara sull'uso dei chatbot e degli strumenti di IA.

    - Il **Regolamento d'Istituto** viene aggiornato con le regole sull'onestà accademica in relazione all'IA.

#### Fase 3: Monitoraggio (Ruoli: Docenti, Animatore Digitale, Gruppo di Lavoro)

1. **Feedback Continuo**: I docenti raccolgono feedback qualitativo dagli studenti sull'utilità e l'usabilità dei chatbot.

2. **Analisi Tecnica**: L'Animatore Digitale, nel rispetto della privacy, analizza (se la piattaforma lo permette e in forma aggregata/anonima) i log di interazione per identificare domande frequenti, punti di difficoltà o eventuali usi impropri.

3. **Revisione Periodica**: Il Gruppo di Lavoro si riunisce periodicamente (es. a cadenza bimestrale) per discutere i risultati del pilota, analizzare i rischi emersi e decidere eventuali correttivi.

### 3.4 Cose da NON Fare: Una Guida Pratica

Per garantire un'implementazione etica e sicura, è fondamentale evitare i seguenti comportamenti:

- **NON utilizzare l'IA per la valutazione finale e automatizzata degli studenti**. Anche se l'IA può correggere un test a scelta multipla, il giudizio finale, specialmente su prove complesse, deve rimanere una prerogativa umana. L'AI Act[^1] è chiarissimo su questo punto.

- **NON inserire dati personali degli studenti in piattaforme di IA generative pubbliche e generiche**. Ad esempio, è vietato caricare un tema con nome e cognome di uno studente su ChatGPT per chiederne una correzione. Si devono usare solo gli strumenti approvati e configurati dalla scuola.

- **NON adottare un nuovo strumento di IA senza aver consultato il DPO e aver completato la procedura di valutazione del rischio (DPIA)**. L'approccio "fai da te" espone l'istituto a gravi rischi legali e di sicurezza.

- **NON dare per scontato che l'output dell'IA sia corretto, completo o imparziale**. I docenti hanno la responsabilità professionale di verificare ogni contenuto prima di condividerlo con gli studenti.

- **NON implementare sistemi di IA senza una formazione adeguata per docenti e studenti**. La tecnologia è inutile, se non dannosa, senza la competenza per usarla criticamente.

- **NON violare il diritto d'autore**. Utilizzare l'IA per riprodurre integralmente contenuti protetti da copyright è illegale. Gli strumenti vanno usati per creare opere originali o per supportare l'analisi.

- **NON ignorare l'obbligo di trasparenza**. Quando si usa un chatbot o si presenta un contenuto generato da IA, la sua natura artificiale deve essere sempre dichiarata.

### 3.5 Checklist Riepilogativa sulla Privacy (GDPR)

Per lo scenario descritto, ecco un riepilogo degli adempimenti privacy essenziali:

| Adempimento | Azione Concreta da Svolgere | Responsabile |
|---|---|---|
| Base Giuridica | Verificare che ogni uso dell'IA rientri nel compito di interesse pubblico della scuola (didattica, amministrazione). Documentarlo. | DPO / Dirigente |
| Valutazione d'Impatto (DPIA) | Eseguire una DPIA prima di adottare le piattaforme di IA (es. per i chatbot). Valutare i rischi e le misure di mitigazione. | DPO / Gruppo Lavoro IA |
| Informativa Privacy | Aggiornare le informative per studenti, famiglie e personale, spiegando in modo semplice quali strumenti IA si usano e perché. | DPO / Segreteria |
| Contratto con Fornitori (Art. 28) | Firmare un DPA (Data Processing Agreement) con ogni fornitore di servizi IA (es. Google, Perplexity). | Dirigente / DSGA / DPO |
| Principi di Privacy by Design/Default | Scegliere le impostazioni più protettive per la privacy (es. disattivare la cronologia delle chat, opt-out dall'addestramento del modello). | Animatore Digitale / Docenti |
| Formazione e Autorizzazione | Formare il personale sull'uso sicuro degli strumenti e sul divieto di inserire dati personali. Autorizzare formalmente il personale. | Dirigente / Animatore Digitale |
| Registro dei Trattamenti | Aggiornare il registro con una scheda dettagliata per ogni nuovo trattamento basato su IA. | DPO |

### 3.6 Approfondimento sulla Scelta delle Piattaforme e la Gestione dei Dati

La scelta dello strumento tecnologico è una decisione cruciale che determina il livello di conformità e di sicurezza. Analizziamo due scenari concreti per l'implementazione di chatbot e strumenti di IA generativa.

#### 3.6.1 Caso 1: Piattaforme Enterprise Integrate (es. Microsoft 365 Copilot)

Se l'Istituto utilizza già una suite enterprise come Microsoft 365, l'adozione di Copilot Chat ("Copilot con protezione dei dati commerciali") offre un quadro di conformità pre-strutturato. Le garanzie fornite da Microsoft, come indicato nella loro documentazione sulla privacy, assicurano che i dati dell'organizzazione (prompt, risposte, documenti analizzati) non vengano utilizzati per addestrare i modelli di IA globali.

**Tuttavia, questo non costituisce un'esenzione dagli obblighi della scuola.** L'Istituto rimane **Titolare del Trattamento** e deve governare attivamente il processo. I vantaggi sono che molti adempimenti sono facilitati:

1. **Accordo sul Trattamento dei Dati (DPA)**: È già incluso nei termini di servizio di Microsoft per i clienti educational/enterprise. Il DPO e il DSGA devono assicurarsi di averne preso visione e di conservarne la documentazione. Microsoft agisce come **Responsabile del Trattamento** (Art. 28 GDPR[^3]).

2. **Valutazione d'Impatto (DPIA)**: **Resta obbligatoria**. Sebbene il rischio di *data leak* verso modelli esterni sia mitigato, la scuola deve valutare come lo strumento viene usato *al suo interno*. La DPIA si concentrerà meno sul fornitore e più sui processi interni:

    - **Rischi**: Uso improprio da parte degli utenti, trattamento di dati particolarmente sensibili all'interno del tenant, impatto sui diritti degli studenti (es. equità, trasparenza).

    - **Misure**: Definizione di policy di utilizzo interne, formazione specifica, procedure di monitoraggio.

3. **Adempimenti Restanti**: Rimangono invariati l'aggiornamento delle informative privacy, la formazione degli utenti e l'aggiornamento del Registro dei Trattamenti.

**Conclusione**: L'uso di una piattaforma enterprise integrata **semplifica enormemente la conformità privacy**, ma non la elimina. La governance rimane una responsabilità imprescindibile della scuola.

#### 3.6.2 Caso 2: Piattaforme Esterne (es. NotebookLM, Perplexity)

Questo scenario richiede una cautela significativamente maggiore. La distinzione fondamentale è tra l'uso di account personali (consumer) e account istituzionali (educational/enterprise).

**L'uso di account personali per attività didattiche istituzionali è VIETATO e NON CONFORME.**

Le ragioni sono stringenti e non derogabili:

1. **Perdita del Controllo sui Dati**: Con un account personale, i termini di servizio legano l'individuo (studente o docente) al fornitore. La scuola è un soggetto terzo e non ha alcun controllo su come i dati vengono trattati, conservati o utilizzati.

2. **La Scuola non è Titolare**: Non potendo "determinare le finalità e i mezzi del trattamento", la scuola non può adempiere ai suoi obblighi di Titolare del Trattamento. Di fatto, sta obbligando i suoi studenti a cedere dati personali a un'entità esterna secondo regole che non governa.

3. **Addestramento dei Modelli**: I servizi consumer, per impostazione predefinita, usano i dati degli utenti per addestrare i propri modelli. Questo è in diretta violazione del principio di limitazione della finalità del GDPR[^3] e delle Linee Guida MIM[^2].

4. **Assenza di un DPA**: Non è possibile stipulare un Accordo sul Trattamento dei Dati (Art. 28 GDPR[^3]) tra la scuola e il fornitore per gli account consumer, rendendo il trattamento illecito.

**La Soluzione Conforme:**

Per utilizzare strumenti come NotebookLM, Perplexity o analoghi, è **imperativo** che l'Istituto sottoscriva un **piano "Educational", "Enterprise" o "Business"** che offra, a livello contrattuale, le seguenti garanzie:

- La scuola agisce come cliente e **Titolare del Trattamento**.

- Il fornitore si impegna a firmare un **DPA** conforme al GDPR[^3], agendo come Responsabile del Trattamento.

- Il contratto garantisce esplicitamente che i dati degli account dell'istituto (**opt-out**) non verranno utilizzati per addestrare i modelli di IA del fornitore.

- La piattaforma fornisce una console di amministrazione per la gestione centralizzata degli account.

**Se un fornitore non offre queste condizioni, il suo strumento non può essere adottato per la didattica con gli studenti.** L'uso individuale e spontaneo da parte di un docente maggiorenne per la propria preparazione personale rientra nella sua responsabilità, ma non può essere in alcun modo richiesto o strutturato come attività didattica che coinvolga gli studenti.

Questo capitolo fornisce un modello concreto e replicabile. Applicando questo rigore metodologico ad ogni futura iniziativa, l'Istituto potrà navigare la transizione verso l'IA in modo sicuro, etico e vantaggioso per tutta la comunità scolastica.

## CAPITOLO 4: CONCLUSIONI E PROSSIMI PASSI

L'integrazione dell'Intelligenza Artificiale rappresenta una trasformazione profonda, paragonabile all'avvento di internet. Non è una scelta, ma una realtà da governare. Questo Documento di Indirizzo non è un punto di arrivo, ma l'inizio di un percorso strutturato.

L'approccio delineato, fondato su un'attenta analisi normativa, sulla centralità della persona e sulla responsabilità condivisa, mira a fare del nostro Istituto un luogo dove l'innovazione tecnologica non solo è possibile, ma è al servizio del progetto educativo e della crescita umana e intellettuale di ogni studente.

I prossimi passi saranno:

1. **Presentazione e Discussione**: Il presente Documento sarà presentato al Collegio Docenti e al Consiglio d'Istituto per la discussione e l'approvazione formale.

2. **Attuazione del Piano d'Azione**: A seguito dell'approvazione, il Dirigente Scolastico darà avvio alle azioni previste, a partire dall'istituzione del Gruppo di Lavoro per l'IA.

3. **Monitoraggio e Revisione**: Il Gruppo di Lavoro monitorerà l'attuazione del piano e proporrà al Consiglio d'Istituto una revisione annuale del presente Documento.

Affrontiamo questa sfida con prudenza, curiosità e con la ferma convinzione che la tecnologia più avanzata debba sempre essere guidata dalla saggezza umana e dai valori fondanti della nostra Costituzione e della nostra comunità.

## Riferimenti normativi

[^1]: [Regolamento (UE) 2024/1689 del Parlamento europeo e del Consiglio, del 13 giugno 2024 (AI Act).](https://eur-lex.europa.eu/legal-content/IT/TXT/PDF/?uri=OJ:L_202401689)

[^2]: [Ministero dell'Istruzione e del Merito, "Linee guida per l'introduzione dell'Intelligenza Artificiale nelle Istituzioni scolastiche", 2025](https://www.mim.gov.it/documents/20182/0/MIM_Linee+guida+IA+nella+Scuola_09_08_2025-signed.pdf/b70fdc45-4b75-1f7e-73bf-eab12989b928?t=1756468797694)

[^3]: [Regolamento (UE) 2016/679 del Parlamento europeo e del Consiglio, del 27 aprile 2016 (GDPR)](https://www.garanteprivacy.it/regolamentoue).
