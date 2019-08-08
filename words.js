const words = (`
walk away: s'éloigner
go to: aller (vers / a)
shout at: crier sur
throw: jeter (sur /vers)
run along: courir le long de
sit beside: être assis à côté de
walk into: entrer dans
walk out: sortir de
remove from: retirer de
swim across: traverser à la nage
walk through: franchir
go past: passer devant
hanging: suspendre, accrocher
folding: plier
putting away: ranger
picking up: ramasser
tying: nouer, attacher
posting: poster
wrapping: emballer
sweeping: balayer
cooking: cuisiner
carrying: porter
business: affaire
cleaning: nettoyer
get on: monter dans
get off: descendre de
wipe off: enlever
run up: monter en courant
walk down: descendre à pied
put away: ranger
putting on: mettre, enfiler
in: dans
on: sur
at: à
around: autour
near: près de
next to: à coté de
by: à, à coté de
in front of: devant
behind: derrière
between: entre
under: sous
below: en dessous, sous
above: au-dessus
over: au-dessus, par-dessus
opposite: en face de
across: en face
inside: dedans, à l'intérieur
outside: dehors, à l'extérieur
piled (up): empilé
stacked (up): empilé
scattered: éparpillé
lined up: aligné
hung: accroché (sur / à)
laid out: disposé
placed on: placé sur
gathered: rassemblé
lying on: posé sur
set in the top of: placé au-dessus de
surrounded by: entouré de
leanning against: posé contre
office: bureau (pièce)
desk: bureau (meuble)
drawer: tiroir
chair: chaise
shelves: étagères
filing cabinet: classeur (meuble)
laptop: ordinateur portable
monitor: écran, moniteur
screen: écran
keyboard: clavier
mouse: souris
headphones: casque audio
clock: horloge
lamp: lampe
photocopier: photocopieur
tray: plateau
binder: classeur
notepad: bloc-notes
tape: ruban adhésif
magnet: aimant
folder: dossier
pictures: images, photos
patron: client
diner: dineur, convives
server: serveur
waiter: serveur
waitress: serveuse
apron: tablier
plate: assiette
bowl: bol
tablecloth: nappe
place setting: le couvert
cutlery: les couverts
glass: verre
paper napkin: serviette en papier
freezer: congélateur
food: nourriture
beverage: boisson
cutting board: planche à découper
cookware: ustensiles de cuisine
counter: comptoir
board member: membre du conseil d’administration
CEO (chief executive officer): PDG
CFO (chief financial officer): directeur financier
Human Ressources Director: DRH
Head of department: chef de service
office manager: responsable administratif
floor manager: chef de magasin
account manager: chargé de clientèle
maintenance crew: équipe de maintenance
IT technician: informaticien
PA (personal assistant): assistant de direction
clerk: employé de bureau
clerical worker: employé de bureau
executive: cadre (poste)
job seeker: demandeur d’emploi
contractor: prestataire
intern: stagiaire
temp: intérimaire
security guard: agent de sécurité
sales rep: commercial
salesperson: commercial
graphic designer: graphiste
`.split("\n")).reduce((acc, curr) => {
	const [english, french] = curr.split(':');
	if(english && french){
		acc.push({
			english,
			french
		});
	}
	return acc;
},[]);
