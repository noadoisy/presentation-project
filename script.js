const slides = [
            {
                title: "Introduction à la pédopornographie numérique",
                content: `
                    <ul>
                        <li>Explosion du numérique : nouveaux défis pour la protection des mineurs</li>
                        <li>Internet facilite la production et la diffusion de contenus pédopornographiques</li>
                        <li>Nécessité d'adapter le droit et les outils pour lutter efficacement</li>
                    </ul>
                `
            },
            {
                title: "Définition légale de la pédopornographie (Code pénal, art. 227-23)",
                content: `
                    <ul>
                        <li>Représentation visuelle d'un mineur dans un contexte sexuel explicite</li>
                        <li>Comprend images fixes, vidéos, dessins, et autres supports numériques</li>
                        <li>Sanctions pour production, détention, diffusion, consultation</li>
                    </ul>
                `
            },
            {
                title: "Historique juridique de la lutte contre la pédopornographie",
                content: `
                    <ul>
                        <li>Des premiers textes sur supports physiques aux lois numériques</li>
                        <li>Adaptation progressive aux enjeux d'Internet et des réseaux sociaux</li>
                        <li>Renforcement des peines et élargissement des infractions</li>
                    </ul>
                `
            },
            {
                title: "Différence entre pédopornographie et exploitation sexuelle",
                content: `
                    <ul>
                        <li>Pédopornographie : contenu visuel à caractère sexuel impliquant un mineur</li>
                        <li>Exploitation sexuelle : actes réels d'abus sur mineurs, souvent liés à production de contenus</li>
                        <li>Importance juridique et pénale de cette distinction</li>
                    </ul>
                `
            },
            {
                title: "Terminologie internationale : Child Sexual Abuse Material (CSAM)",
                content: `
                    <ul>
                        <li>Adoption par ONU, Conseil de l'Europe, Europol</li>
                        <li>CSAM englobe tous les supports de contenu abusif à l'encontre des enfants</li>
                        <li>Harmonisation pour faciliter coopération internationale</li>
                    </ul>
                `
            },
            {
                title: "Techniques de création des contenus pédopornographiques",
                content: `
                    <ul>
                        <li>Captures illicites d'actes réels sur mineurs</li>
                        <li>Créations virtuelles : dessins, animations, deepfakes produits par intelligence artificielle</li>
                        <li>Complexité croissante et défis de détection</li>
                    </ul>
                `
            },
            {
                title: "Modes de diffusion en ligne",
                content: `
                    <ul>
                        <li>Réseaux sociaux, plateformes de partage, messageries instantanées</li>
                        <li>Darknet et réseaux P2P pour échanges anonymes</li>
                        <li>Difficultés d'interception et d'identification des diffuseurs</li>
                    </ul>
                `
            },
            {
                title: "Statistiques mondiales récentes",
                content: `
                    <ul>
                        <li>Augmentation annuelle des signalements et saisies par INTERPOL et Europol</li>
                        <li>Profils des victimes : majoritairement mineurs de moins de 14 ans</li>
                        <li>Profils des auteurs : souvent des réseaux organisés ou prédateurs isolés</li>
                    </ul>
                `
            },
            {
                title: "Anonymat et techniques d'évasion",
                content: `
                    <ul>
                        <li>Usage de VPN, TOR et cryptomonnaies pour cacher identité et transactions</li>
                        <li>Impacts négatifs sur l'efficacité des enquêtes numériques</li>
                        <li>Besoin de nouvelles solutions technologiques et juridiques</li>
                    </ul>
                `
            },
            {
                title: "Chiffrement et protection de la vie privée",
                content: `
                    <ul>
                        <li>Enjeux entre droit à la vie privée et nécessité de surveiller les contenus illégaux</li>
                        <li>Protocoles de chiffrement empêchant parfois l'accès légal aux preuves</li>
                        <li>Débat politique et judiciaire autour du « backdoor »</li>
                    </ul>
                `
            },
            {
                title: "Limites actuelles des technologies de détection automatique",
                content: `
                    <ul>
                        <li>Algorithmes d'analyse d'images et vidéos : efficacité variable</li>
                        <li>Faux positifs et faux négatifs, problématiques d'éthique et de liberté d'expression</li>
                        <li>Nécessité d'amélioration continue et de contrôle humain</li>
                    </ul>
                `
            },
            {
                title: "Importance des preuves numériques en justice",
                content: `
                    <ul>
                        <li>Authentification, traçabilité et conservation des données</li>
                        <li>Respect des procédures légales pour la validité des preuves</li>
                        <li>Expertise numérique indispensable dans les enquêtes</li>
                    </ul>
                `
            },
            {
                title: "Éthique et limites de la surveillance numérique",
                content: `
                    <ul>
                        <li>Risques d'atteinte à la vie privée et aux libertés fondamentales</li>
                        <li>Rôle de la CNIL et des instances de contrôle</li>
                        <li>Importance d'un cadre strict et transparent</li>
                    </ul>
                `
            },
            {
                title: "Lutte contre la production versus la diffusion",
                content: `
                    <ul>
                        <li>Priorité donnée à l'interruption de la production de contenu illicite</li>
                        <li>Mais la diffusion facilite la propagation et la victimisation prolongée</li>
                        <li>Besoin d'une stratégie globale intégrant prévention, répression et accompagnement</li>
                    </ul>
                `
            },
            {
                title: "Typologie des victimes",
                content: `
                    <ul>
                        <li>Majorité de mineurs âgés de 0 à 14 ans</li>
                        <li>Impacts psychologiques à court et long terme</li>
                        <li>Importance de dispositifs de protection et d'accompagnement</li>
                    </ul>
                `
            },
            {
                title: "Typologie des délinquants",
                content: `
                    <ul>
                        <li>Prédateurs isolés, souvent avec troubles psychologiques</li>
                        <li>Réseaux organisés internationaux avec mécanismes sophistiqués</li>
                        <li>Nécessité d'une approche judiciaire adaptée à chaque profil</li>
                    </ul>
                `
            },
            {
                title: "Impact psychologique sur les victimes",
                content: `
                    <ul>
                        <li>Traumatisme durable, troubles anxieux, dépression</li>
                        <li>Difficultés à se réinsérer socialement</li>
                        <li>Importance du soutien psychologique spécialisé</li>
                    </ul>
                `
            },
            {
                title: "Conséquences sociales",
                content: `
                    <ul>
                        <li>Stigmatisation des victimes et de leurs familles</li>
                        <li>Impact sur la confiance dans le numérique</li>
                        <li>Nécessité d'une politique publique forte de sensibilisation</li>
                    </ul>
                `
            },
            {
                title: "Prévention et sensibilisation",
                content: `
                    <ul>
                        <li>Campagnes nationales et internationales ciblant enfants, parents et professionnels</li>
                        <li>Rôle des écoles, associations et médias</li>
                        <li>Formation continue des acteurs du numérique</li>
                    </ul>
                `
            },
            {
                title: "Rôle des parents et éducateurs",
                content: `
                    <ul>
                        <li>Importance de l'accompagnement dans l'utilisation d'Internet par les mineurs</li>
                        <li>Outils de contrôle parental et dialogue ouvert</li>
                        <li>Programmes d'éducation numérique adaptés</li>
                    </ul>
                `
            },
            {
                title: "PARTIE 1.2 : CADRE JURIDIQUE INTERNATIONAL APPROFONDI",
                content: `
                    <div class="section-title">
                        <h2>PARTIE 1.2</h2>
                        <p>CADRE JURIDIQUE INTERNATIONAL APPROFONDI</p>
                    </div>
                `,
                isSection: true
            },
            {
                title: "Convention de Lanzarote (2007)",
                content: `
                    <ul>
                        <li>Protection des enfants contre l'exploitation et les abus sexuels</li>
                        <li>Obligation des États de criminaliser et punir la pédopornographie</li>
                        <li>Mise en place de mesures de prévention et de coopération judiciaire</li>
                    </ul>
                `
            },
            {
                title: "Convention de Budapest sur la cybercriminalité (2001)",
                content: `
                    <ul>
                        <li>Premier traité international sur la cybercriminalité</li>
                        <li>Sanctions renforcées pour production et diffusion de contenus pédopornographiques</li>
                        <li>Facilitation de la coopération transfrontalière entre autorités</li>
                    </ul>
                `
            },
            {
                title: "Protocoles additionnels des Nations Unies",
                content: `
                    <ul>
                        <li>Adoption de résolutions pour lutter contre la cybercriminalité liée aux enfants</li>
                        <li>Encouragement à harmoniser les législations nationales</li>
                        <li>Initiatives de formation et de partage d'information</li>
                    </ul>
                `
            },
            {
                title: "Directive européenne 2011/93/UE",
                content: `
                    <ul>
                        <li>Harmonisation des infractions et sanctions en matière de pédopornographie</li>
                        <li>Obligation pour les États membres de prendre des mesures de prévention</li>
                        <li>Responsabilité accrue des fournisseurs d'accès et hébergeurs</li>
                    </ul>
                `
            },
            {
                title: "Règlement général sur la protection des données (RGPD)",
                content: `
                    <ul>
                        <li>Garantit la protection des données personnelles, y compris pour les victimes</li>
                        <li>Encadre l'utilisation des données dans le cadre des enquêtes judiciaires</li>
                        <li>Impose des règles strictes aux acteurs du numérique</li>
                    </ul>
                `
            },
            {
                title: "Digital Services Act (DSA)",
                content: `
                    <ul>
                        <li>Nouvelles règles européennes pour encadrer les plateformes en ligne</li>
                        <li>Obligation de retirer rapidement les contenus illégaux, y compris pédopornographiques</li>
                        <li>Transparence et contrôle accrus sur les algorithmes et modération</li>
                    </ul>
                `
            },
            {
                title: "Projets de règlements européens futurs",
                content: `
                    <ul>
                        <li>Proposition d'un cadre plus strict sur la responsabilité des plateformes</li>
                        <li>Utilisation d'IA pour détection automatisée des contenus illicites</li>
                        <li>Renforcement des pouvoirs de contrôle des autorités</li>
                    </ul>
                `
            },
            {
                title: "Bases de données internationales (Europol, INTERPOL, INHOPE)",
                content: `
                    <ul>
                        <li>Centralisation des signalements et contenus interdits</li>
                        <li>Partage d'informations entre États membres</li>
                        <li>Coordination des opérations transnationales</li>
                    </ul>
                `
            },
            {
                title: "Difficultés de la coopération judiciaire internationale",
                content: `
                    <ul>
                        <li>Divergences législatives entre pays</li>
                        <li>Délais dans les demandes d'entraide judiciaire</li>
                        <li>Problèmes d'extradition et reconnaissance mutuelle des décisions</li>
                    </ul>
                `
            },
            {
                title: "Exemples de coopération internationale réussie",
                content: `
                    <ul>
                        <li>Opération « Predator » d'Europol : démantèlement de réseaux pédopornographiques</li>
                        <li>Coopération entre États-Unis, Europe et Asie</li>
                        <li>Résultats et enseignements pour l'avenir</li>
                    </ul>
                `
            },
            {
                title: "Limites des sanctions transnationales",
                content: `
                    <ul>
                        <li>Peines inégales selon les juridictions</li>
                        <li>Difficultés à poursuivre les auteurs dans certains pays</li>
                        <li>Nécessité d'harmoniser et durcir les sanctions</li>
                    </ul>
                `
            },
            {
                title: "Protection des droits fondamentaux dans le droit international",
                content: `
                    <ul>
                        <li>Équilibre entre lutte contre les abus et respect des libertés</li>
                        <li>Liberté d'expression, droit à la vie privée, droit à un procès équitable</li>
                        <li>Contrôle des mesures de surveillance par des instances indépendantes</li>
                    </ul>
                `
            },
            {
                title: "Approches spécifiques des États-Unis et du Royaume-Uni",
                content: `
                    <ul>
                        <li>Législations très strictes avec peines lourdes</li>
                        <li>Programmes de surveillance et détection avancés</li>
                        <li>Collaboration étroite avec les plateformes numériques</li>
                    </ul>
                `
            },
            {
                title: "Rôle des ONG internationales",
                content: `
                    <ul>
                        <li>Organisations comme ECPAT, Terre des Hommes</li>
                        <li>Sensibilisation, formation, soutien aux victimes</li>
                        <li>Lobbying pour des réformes législatives</li>
                    </ul>
                `
            },
            {
                title: "Perspectives futures du droit international",
                content: `
                    <ul>
                        <li>Vers une harmonisation globale des lois</li>
                        <li>Création possible d'un code pénal numérique mondial</li>
                        <li>Défis liés aux technologies émergentes (IA, réalité virtuelle)</li>
                    </ul>
                `
            },
            {
                title: "PARTIE 1.3 : DROIT FRANÇAIS APPROFONDI",
                content: `
                    <div class="section-title">
                        <h2>PARTIE 1.3</h2>
                        <p>DROIT FRANÇAIS APPROFONDI</p>
                    </div>
                `,
                isSection: true
            },
            {
                title: "Analyse détaillée du Code pénal français",
                content: `
                    <ul>
                        <li>Articles 227-23 à 227-27 définissant infractions et sanctions</li>
                        <li>Définition précise des infractions liées à la pédopornographie</li>
                        <li>Modalités de poursuite et conditions de preuve</li>
                    </ul>
                `
            },
            {
                title: "Responsabilités pénales des acteurs",
                content: `
                    <ul>
                        <li>Auteurs directs : producteurs, diffuseurs</li>
                        <li>Complices et intermédiaires : hébergeurs, fournisseurs d'accès</li>
                        <li>Responsabilité pénale des plateformes en cas de négligence</li>
                    </ul>
                `
            },
            {
                title: "Peines encourues en droit français",
                content: `
                    <ul>
                        <li>Peines de prison allant jusqu'à 5 ans et amendes lourdes</li>
                        <li>Peines complémentaires : interdiction professionnelle, inscription au casier judiciaire</li>
                        <li>Cas des récidives : sanctions renforcées</li>
                    </ul>
                `
            },
            {
                title: "Lois numériques récentes (ex : Loi Avia, DSA)",
                content: `
                    <ul>
                        <li>Loi Avia (2020) visant à lutter contre les contenus haineux et illicites en ligne</li>
                        <li>DSA : responsabilité accrue des plateformes numériques</li>
                        <li>Effets sur la lutte contre la pédopornographie en ligne</li>
                    </ul>
                `
            },
            {
                title: "Rôle de l'ARCOM (ex CSA et Hadopi)",
                content: `
                    <ul>
                        <li>Régulation des médias et contenus numériques</li>
                        <li>Missions de contrôle, sanction et prévention</li>
                        <li>Collaboration avec les forces de l'ordre et la justice</li>
                    </ul>
                `
            },
            {
                title: "Jurisprudence française majeure",
                content: `
                    <ul>
                        <li>Étude de décisions emblématiques en matière de pédopornographie numérique</li>
                        <li>Analyse des motifs, principes retenus par les tribunaux</li>
                        <li>Influence sur l'évolution législative</li>
                    </ul>
                `
            },
            {
                title: "Rôle de la CNIL",
                content: `
                    <ul>
                        <li>Protection des données personnelles des victimes et suspects</li>
                        <li>Contrôle des traitements de données numériques dans les enquêtes</li>
                        <li>Sanctions en cas de non-respect</li>
                    </ul>
                `
            },
            {
                title: "Organisation des forces de l'ordre en France",
                content: `
                    <ul>
                        <li>OCLCTIC (Office central de lutte contre la criminalité liée aux technologies de l'information et de la communication)</li>
                        <li>Brigades spécialisées dans la cybercriminalité</li>
                        <li>Coopération avec les services internationaux</li>
                    </ul>
                `
            },
            {
                title: "Procédures d'enquête numérique",
                content: `
                    <ul>
                        <li>Perquisitions informatiques, saisie de matériel numérique</li>
                        <li>Conservation des données et chaîne de custody</li>
                        <li>Difficultés liées au chiffrement et à l'anonymat</li>
                    </ul>
                `
            },
            {
                title: "Enjeux liés au chiffrement dans la lutte judiciaire",
                content: `
                    <ul>
                        <li>Obstacle majeur pour l'accès aux preuves</li>
                        <li>Débats sur la mise en place de portes dérobées (backdoors)</li>
                        <li>Respect des libertés publiques versus efficacité judiciaire</li>
                    </ul>
                `
            },
            {
                title: "Rôle des plateformes françaises",
                content: `
                    <ul>
                        <li>Obligations de retrait rapide des contenus illicites</li>
                        <li>Coopération avec les autorités judiciaires et forces de l'ordre</li>
                        <li>Sanctions en cas de non-respect des obligations légales</li>
                    </ul>
                `
            },
            {
                title: "Procédures civiles complémentaires",
                content: `
                    <ul>
                        <li>Réparation du préjudice subi par les victimes</li>
                        <li>Action en justice pour dommages et intérêts</li>
                        <li>Importance de la reconnaissance judiciaire du dommage moral</li>
                    </ul>
                `
            },
            {
                title: "Protection des victimes mineures",
                content: `
                    <ul>
                        <li>Dispositifs spécifiques d'accompagnement et de soutien</li>
                        <li>Confidentialité et anonymat dans les procédures</li>
                        <li>Prévention et prise en charge psychologique</li>
                    </ul>
                `
            },
            {
                title: "Prévention en milieu scolaire",
                content: `
                    <ul>
                        <li>Programmes éducatifs sur les risques du numérique</li>
                        <li>Formation des enseignants et personnel éducatif</li>
                        <li>Collaboration avec associations et forces de l'ordre</li>
                    </ul>
                `
            },
            {
                title: "Politiques publiques françaises contre la pédopornographie en ligne",
                content: `
                    <ul>
                        <li>Plans gouvernementaux pluriannuels</li>
                        <li>Financements pour la prévention, la répression et le soutien aux victimes</li>
                        <li>Coordination entre ministères, forces de l'ordre et acteurs privés</li>
                    </ul>
                `
            },
            {
                title: "Débats sociétaux en France",
                content: `
                    <ul>
                        <li>Équilibre entre libertés individuelles et sécurité collective</li>
                        <li>Place du numérique dans la vie privée</li>
                        <li>Rôle des médias dans la sensibilisation</li>
                    </ul>
                `
            },
            {
                title: "Analyse critique des textes existants",
                content: `
                    <ul>
                        <li>Points forts : cadre législatif clair, sanctions sévères</li>
                        <li>Limites : difficultés d'application, ressources limitées</li>
                        <li>Besoin d'adaptations aux technologies émergentes</li>
                    </ul>
                `
            },
            
            {
                title: "Réformes en cours et propositions parlementaires",
                content: `
                <ul>
                    <li>Textes visant à renforcer la lutte et la coopération internationale</li>
                    <li>Propositions pour encadrer l'intelligence artificielle</li>
                 <li>Nouvelles obligations pour les plateformes</li>
                </ul>
             `
            },
            {
                title: "Réactions des acteurs privés (Google, Facebook, etc.)",
                content: `
                    <ul>
                        <li>Initiatives volontaires pour détecter et retirer les contenus illicites</li>
                        <li>Programmes de signalement et collaboration avec ONG</li>
                        <li>Défis techniques et éthiques rencontrés</li>
                    </ul>
                `
            },
            {
                title: "PARTIE 2.1 : JURISPRUDENCE",
                content: `
                    <div class="section-title">
                        <h2>PARTIE 2.1</h2>
                        <p>JURISPRUDENCE</p>
                    </div>
                `,
                isSection: true
            },
            {
                title: "Introduction à la jurisprudence sur la pédopornographie en ligne",
                content: `
                    <ul>
                        <li>Importance des décisions de justice pour interpréter la loi</li>
                        <li>Analyse des jugements récents en France et en Europe</li>
                        <li>Impact sur la pratique judiciaire et les politiques publiques</li>
                    </ul>
                `
            },
            {
                title: "Jurisprudence française : Affaire X (2021)",
                content: `
                    <ul>
                        <li>Détail du cas : détention massive de contenus pédopornographiques sur serveur privé</li>
                        <li>Décision : condamnation à 7 ans de prison, confiscation du matériel</li>
                        <li>Analyse : prise en compte du volume, récidive et intention</li>
                    </ul>
                `
            },
            {
                title: "Jurisprudence européenne : Arrêt de la Cour de justice de l'UE (2020)",
                content: `
                    <ul>
                        <li>Décision sur la responsabilité des hébergeurs</li>
                        <li>Confirmation de l'obligation de retrait rapide des contenus illicites</li>
                        <li>Effets sur la régulation européenne</li>
                    </ul>
                `
            },
            {
                title: "Jurisprudence internationale : États-Unis, affaire Y",
                content: `
                    <ul>
                        <li>Utilisation de preuves issues de la surveillance électronique</li>
                        <li>Questions sur la légalité des méthodes d'enquête</li>
                        <li>Équilibre entre sécurité et droits constitutionnels</li>
                    </ul>
                `
            },
            {
                title: "Analyse des critères de preuve en matière numérique",
                content: `
                    <ul>
                        <li>Validité et authenticité des preuves numériques</li>
                        <li>Chaîne de conservation et risques de manipulation</li>
                        <li>Rôle crucial de l'expertise judiciaire</li>
                    </ul>
                `
            },
            {
                title: "Jurisprudence sur la détention passive vs active",
                content: `
                    <ul>
                        <li>Différence entre possession accidentelle et stockage volontaire</li>
                        <li>Conséquences pénales en fonction de l'intention démontrée</li>
                        <li>Exemples de décisions marquantes</li>
                    </ul>
                `
            },
            {
                title: "Jurisprudence sur la diffusion via réseaux sociaux",
                content: `
                    <ul>
                        <li>Responsabilité des utilisateurs et des administrateurs</li>
                        <li>Sanctions en cas de non-signalement ou complicité</li>
                        <li>Obligations de vigilance renforcées</li>
                    </ul>
                `
            },
            {
                title: "Jurisprudence sur les créations virtuelles et deepfakes",
                content: `
                    <ul>
                        <li>Débat sur la qualification juridique des images synthétiques</li>
                        <li>Cas de condamnation pour atteinte à la dignité des mineurs</li>
                        <li>Perspectives d'évolution législative</li>
                    </ul>
                `
            },
            {
                title: "Impact des décisions jurisprudentielles sur la doctrine",
                content: `
                    <ul>
                        <li>Adaptation des interprétations des textes de loi</li>
                        <li>Influence sur la formation des magistrats et enquêteurs</li>
                        <li>Importance de la veille juridique continue</li>
                    </ul>
                `
            },
            {
                title: "Études de cas emblématiques",
                content: `
                    <ul>
                        <li>Résumé de plusieurs affaires illustrant différentes facettes du problème</li>
                        <li>Analyse comparative des décisions et justifications</li>
                        <li>Leçons à tirer pour la pratique judiciaire</li>
                    </ul>
                `
            },
            {
                title: "Les limites actuelles de la jurisprudence",
                content: `
                    <ul>
                        <li>Difficulté à suivre le rythme des évolutions technologiques</li>
                        <li>Insuffisance des sanctions face à la complexité des réseaux</li>
                        <li>Nécessité d'un dialogue renforcé entre législateurs et juges</li>
                    </ul>
                `
            },
            {
                title: "PARTIE 2.2 : PROPOSITIONS DE NOUVEAUX TEXTES DE LOI",
                content: `
                    <div class="section-title">
                        <h2>PARTIE 2.2</h2>
                        <p>PROPOSITIONS DE NOUVEAUX TEXTES DE LOI</p>
                    </div>
                `,
                isSection: true
            },
            {
                title: "Introduction aux propositions législatives",
                content: `
                    <ul>
                        <li>Besoin d'adaptation face aux nouvelles réalités numériques</li>
                        <li>Objectifs : renforcer la lutte, protéger les victimes, garantir les droits fondamentaux</li>
                        <li>Méthodologie : concertation entre experts, autorités, société civile</li>
                    </ul>
                `
            },
            {
                title: "Proposition 1 : Clarification de la définition juridique",
                content: `
                    <ul>
                        <li>Inclusion explicite des contenus créés par IA (deepfakes, animations)</li>
                        <li>Distinction précise entre contenus illicites et expressions artistiques ou satiriques</li>
                        <li>Facilitation des poursuites grâce à une terminologie claire</li>
                    </ul>
                `
            },
            {
                title: "Proposition 2 : Responsabilisation accrue des plateformes",
                content: `
                    <ul>
                        <li>Obligation de détection proactive par algorithmes certifiés</li>
                        <li>Sanctions renforcées en cas de non-respect des obligations</li>
                        <li>Transparence dans les processus de modération</li>
                    </ul>
                `
            },
            {
                title: "Proposition 3 : Renforcement de la coopération internationale",
                content: `
                    <ul>
                        <li>Création d'une agence européenne spécialisée dans la cybercriminalité pédopornographique</li>
                        <li>Harmonisation des sanctions et procédures</li>
                        <li>Partage systématique des données entre pays</li>
                    </ul>
                `
            },
            {
                title: "Proposition 4 : Amélioration des outils d'enquête",
                content: `
                    <ul>
                        <li>Développement de solutions techniques avancées (IA, Big Data)</li>
                        <li>Encadrement juridique strict pour éviter les abus</li>
                        <li>Formation spécialisée pour les enquêteurs</li>
                    </ul>
                `
            },
            {
                title: "Proposition 5 : Protection renforcée des victimes",
                content: `
                    <ul>
                        <li>Création de guichets uniques pour signalement et accompagnement</li>
                        <li>Assistance juridique gratuite et soutien psychologique intensifié</li>
                        <li>Campagnes nationales de sensibilisation</li>
                    </ul>
                `
            },
            {
                title: "Proposition 6 : Encadrement de la vie privée et des données",
                content: `
                    <ul>
                        <li>Garanties pour éviter la surveillance excessive</li>
                        <li>Transparence des actions des autorités</li>
                        <li>Respect des principes du RGPD</li>
                    </ul>
                `
            },
            {
                title: "Proposition 7 : Programmes de prévention obligatoires dans les établissements scolaires",
                content: `
                    <ul>
                        <li>Intégration dans les cursus scolaires dès le primaire</li>
                        <li>Formation des enseignants et du personnel encadrant</li>
                        <li>Collaboration avec associations spécialisées</li>
                    </ul>
                `
            },
            {
                title: "Proposition 8 : Lutte contre l'anonymat des délinquants",
                content: `
                    <ul>
                        <li>Régulation stricte des VPN et services anonymisants</li>
                        <li>Obligations d'identification renforcées pour certains services en ligne</li>
                        <li>Coordination internationale pour contrôler les réseaux darknet</li>
                    </ul>
                `
            },
            {
                title: "Proposition 9 : Adaptation des peines et sanctions",
                content: `
                    <ul>
                        <li>Peines planchers pour récidives</li>
                        <li>Mesures alternatives : suivi judiciaire, réinsertion, programmes de prévention pour auteurs</li>
                        <li>Adaptation aux spécificités numériques</li>
                    </ul>
                `
            },
            {
                title: "Proposition 10 : Création d'une plateforme nationale de signalement améliorée",
                content: `
                    <ul>
                        <li>Interface accessible, rapide et sécurisée pour tous</li>
                        <li>Traitement prioritaire des signalements</li>
                        <li>Partenariat avec les forces de l'ordre et acteurs privés</li>
                    </ul>
                `
            },
            {
                title: "Proposition 11 : Mise en place d'un observatoire national du numérique et de la protection des mineurs",
                content: `
                    <ul>
                        <li>Veille des pratiques, évolutions technologiques et juridiques</li>
                        <li>Rapports annuels publics</li>
                        <li>Recommandations aux pouvoirs publics et acteurs privés</li>
                    </ul>
                `
            },
            {
                title: "Proposition 12 : Encouragement à la recherche et innovation technologique",
                content: `
                    <ul>
                        <li>Financement de projets sur la détection automatisée et le traitement des contenus illicites</li>
                        <li>Partenariats public-privé</li>
                        <li>Respect de l'éthique et des droits fondamentaux</li>
                    </ul>
                `
            },
            {
                title: "Proposition 13 : Renforcement du cadre européen et international",
                content: `
                    <ul>
                        <li>Soutien aux initiatives de coopération judiciaire</li>
                        <li>Participation active à la création de normes globales</li>
                        <li>Engagement pour la formation et le partage des bonnes pratiques</li>
                    </ul>
                `
            },
            {
                title: "Conclusion générale",
                content: `
                    <ul>
                        <li>La lutte contre la pédopornographie en ligne est un défi majeur du XXIe siècle</li>
                        <li>Nécessité d'une réponse juridique complète, technique et humaine</li>
                        <li>Importance de la coopération entre États, acteurs privés et société civile</li>
                    </ul>
                `
            },
            {
                title: "Remerciements",
                content: `
                    <ul>
                        <li>Merci de votre attention</li>
                        <li>Remerciements aux organisateurs, intervenants, et participants</li>
                        <li>Invitation aux questions et échanges</li>
                    </ul>
                `
            },
            {
                title: "Sources et bibliographie",
                content: `
                    <ul>
                        <li>Code pénal français, articles 227-23 et suivants</li>
                        <li>Convention de Lanzarote (2007)</li>
                        <li>Directive européenne 2011/93/UE</li>
                        <li>Rapport Europol sur la pédopornographie en ligne, 2023</li>
                        <li>Jurisprudence française et européenne sélectionnée</li>
                        <li>Publications académiques sur le droit numérique et la protection des mineurs</li>
                        <li>Sites officiels CNIL, ARCOM, INTERPOL, INHOPE</li>
                    </ul>
                `
            }];

// Variables pour la navigation
let currentSlideIndex = 0;

function showSlide(index) {
    const slide = slides[index];
    const slideDiv = document.getElementById('currentSlide');
    const slideCounter = document.getElementById('slideCounter');
    const progressBar = document.getElementById('progressBar');
    if (!slideDiv) return;

    slideDiv.innerHTML = `
        ${slide.isSection ? '' : `<h2>${slide.title}</h2>`}
        <div class="slide-content">${slide.content}</div>
    `;

    slideCounter.textContent = `${index + 1} / ${slides.length}`;
    progressBar.style.width = `${((index + 1) / slides.length) * 100}%`;

    document.getElementById('prevBtn').disabled = index === 0;
    document.getElementById('nextBtn').disabled = index === slides.length - 1;
}

function previousSlide() {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
        showSlide(currentSlideIndex);
    }
}

function nextSlide() {
    if (currentSlideIndex < slides.length - 1) {
        currentSlideIndex++;
        showSlide(currentSlideIndex);
    }
}

// Initialisation
window.onload = () => {
    showSlide(currentSlideIndex);

    // Permettre la modification du numéro de page via le compteur
    const slideCounter = document.getElementById('slideCounter');
    slideCounter.contentEditable = true;
    slideCounter.style.cursor = 'pointer';

    slideCounter.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            let value = slideCounter.textContent.split('/')[0].trim();
            let page = parseInt(value, 10);
            if (!isNaN(page) && page >= 1 && page <= slides.length) {
                currentSlideIndex = page - 1;
                showSlide(currentSlideIndex);
            } else {
                // Restaure la valeur correcte si entrée invalide
                showSlide(currentSlideIndex);
            }
            slideCounter.blur();
        }
    });

    slideCounter.addEventListener('blur', function () {
        // Restaure la valeur correcte si l'utilisateur quitte le champ sans valider
        showSlide(currentSlideIndex);
    });
};