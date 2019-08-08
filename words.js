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
wipe off : enlever
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
behind: derière
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
placed on:  placé sur
gathered: rassemblé
lying on: posé sur
set in the top of: placé au-dessus de
surrounded by: entouré de
leanning against: posé contre
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
