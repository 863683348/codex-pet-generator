import type { Dict } from './en'

export const fr: Dict = {
  lang: { en: 'EN', zh: '中', ja: '日', ko: '한', fr: 'FR', de: 'DE' },
  footer: { madeWith: 'Fabriqué pour les utilisateurs de Codex', compatible: 'Compatible OpenAI Codex', copyright: '© 2026 PetGen', privacy: 'Confidentialité', terms: "Conditions d'utilisation", faq: 'FAQ', contact: 'Contact' },
    pricing: {
    title: 'Tarifs simples', desc: 'Choisissez le forfait adapté à vos besoins. Sans frais cachés.', popular: 'POPULAIRE',
    starter: { name: 'Starter', price: 'Gratuit', period: 'à vie', desc: 'Essayez PetGen et découvrez ses capacités.', cta: 'Commencer', f1: '3 générations', f2: '9 états', f3: 'Qualité standard', f4: 'WebP', f5: 'Support' },
    pro: { name: 'Pro', price: '12 €', period: '/mois', desc: 'Pour les créateurs.', cta: 'Souscrire Pro', f1: '15 / mois', f2: '9 états', f3: 'HD (2x)', f4: 'WebP+ZIP', f5: 'Prioritaire', f6: 'pet.json' },
    unlimited: { name: 'Illimité', price: '35 €', period: '/mois', desc: 'Pour les équipes.', cta: 'Souscrire Illimité', f1: 'Illimité', f2: '9 états', f3: 'HD+4K', f4: 'Tous formats', f5: 'Licence commerciale', f6: 'Support dédié', f7: 'Palette' },
  },
  faq: {
    title: 'Foire Aux Questions', desc: 'Tout ce que vous devez savoir sur PetGen.',
    q1: "Qu'est-ce que PetGen ?", a1: 'PetGen est un outil IA qui transforme vos photos en pets pixel-art animés compatibles OpenAI Codex.',
    q2: 'Comment fonctionne la génération ?', a2: 'Téléchargez une photo, l\'IA crée un personnage pixel. Approuvez-le, puis 9 animations sont générées.',
    q3: 'Quels formats sont supportés ?', a3: 'Nous supportons JPG, PNG et WebP. Taille max : 10 Mo.',
    q4: 'Combien de temps cela prend-il ?', a4: 'Environ 90s pour le personnage de base, 2-5 min pour les animations complètes.',
    q5: 'Comment installer le pet dans Codex ?', a5: 'Téléchargez le ZIP, extrayez-le et copiez le dossier dans ~/.codex/pets/. Redémarrez Codex.',
    q6: 'Puis-je utiliser les pets commercialement ?', a6: 'Oui, avec le forfait Illimité. Les forfaits Starter et Pro sont pour usage personnel.',
    q7: 'Quels moyens de paiement acceptez-vous ?', a7: 'Nous acceptons les principales cartes de crédit et PayPal.',
    q8: 'Puis-je annuler mon abonnement ?', a8: 'Oui, à tout moment. Votre accès reste actif jusqu\'à la fin de la période de facturation.',
    q9: 'Que deviennent mes images uploadées ?', a9: 'Les images sont supprimées après la génération. Elles ne sont pas stockées ni réutilisées.',
    q10: 'Existe-t-il un forfait gratuit ?', a10: 'Oui. Le forfait Starter est gratuit et inclut 3 générations.'},
  contact: {
    title: 'Contactez-nous', desc: 'Une question, une suggestion ou besoin d\'aide ? Nous sommes à votre écoute.',
    emailTitle: 'Email', emailDesc: 'cruzreese459228@gmail.com', emailReply: 'Réponse sous 24h.',
    githubTitle: 'GitHub Issues', githubDesc: 'Signalez un bug ou demandez une fonctionnalité.', githubLabel: 'Suivi des problèmes public.',
    businessTitle: 'Demandes professionnelles', businessText: 'Pour les partenariats, parrainages ou autres questions commerciales, veuillez nous écrire à'},
  privacy: {
    title: 'Politique de confidentialité', lastUpdated: 'Dernière mise à jour : juillet 2026',
    s1title: '1. Informations collectées', s1items: ['Informations de compte — via Google, nous recevons votre nom, email et photo.', 'Images téléchargées — traitées et stockées temporairement pour la génération.', 'Données d\'utilisation — PostHog et Google Analytics pour des données anonymisées.', 'Cookies — cookies essentiels et analytiques.'],
    s2title: '2. Utilisation des informations', s2items: ['Fournir, maintenir et améliorer PetGen', 'Générer des pets pixel-art', 'Authentifier votre compte et gérer votre abonnement', 'Analyser les tendances d\'utilisation', 'Répondre à vos demandes'],
    s3title: '3. Partage des données', s3items: ['Supabase — gestion de compte et stockage', 'Vercel — hébergement et déploiement', 'PostHog — analyses produit', 'Google Analytics — trafic web', 'OpenAI / Bailian — génération IA'],
    s4title: '4. Conservation des données', s4text: 'Les images téléchargées sont supprimées après génération. Les données de compte sont conservées jusqu\'à la suppression du compte.',
    s5title: '5. Vos droits', s5items: ['Accéder à vos données personnelles', 'Demander la suppression', 'Refuser le suivi analytique', 'Retirer votre consentement'],
    s6title: '6. Contact', s6text: 'Pour toute question sur cette politique :'},
  terms: {
    title: "Conditions d'utilisation", lastUpdated: 'Dernière mise à jour : juillet 2026',
    s1title: '1. Acceptation', s1text: 'En utilisant PetGen, vous acceptez les présentes conditions.',
    s2title: '2. Description du service', s2text: 'PetGen convertit vos images en sprites pixel-art compatibles OpenAI Codex.',
    s3title: '3. Comptes utilisateur', s3text: 'Connectez-vous via Google. Vous êtes responsable de la confidentialité de votre compte.',
    s4title: '4. Abonnements et paiements', s4text: 'Facturation mensuelle. Annulation possible à tout moment.',
    s5title: '5. Contenu utilisateur', s5text: 'Vous conservez la propriété de vos images et des pets générés.',
    s6title: '6. Utilisation acceptable', s6items: ['Contenu illégal ou nuisible', 'Ingénierie inverse', 'Scripts automatisés', 'Violation des lois'],
    s7title: '7. Propriété intellectuelle', s7text: 'PetGen est notre propriété intellectuelle. Les pets générés sont utilisables selon votre forfait.',
    s8title: '8. Limitation de responsabilité', s8text: 'PetGen est fourni "en l\'état" sans garantie.',
    s9title: '9. Résiliation', s9text: 'Nous nous réservons le droit de suspendre ou résilier l\'accès en cas de violation.',
    s10title: '10. Contact', s10text: 'Pour toute question sur ces conditions :'}} as Dict



