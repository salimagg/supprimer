$(function(){

	$('[id*=region_').on('click',function(){


		

		let region=$(this)

		let regionID=$(this)["0"].id;
		let allregion=$('[id*=region_');


		allregion.css('fill','#fff');
		region.css('fill','DCDC99');


		regionID=regionID.replace('region_','Vous avez sélectionné la région ')
		regionID=regionID.replace('idf','Île de France. Il y fait 11°C et le temps y est ensoleillé.')
		regionID=regionID.replace('picardie','Nord-Pas-de-Calais Picardie. Il y fait 12°C et le temps y est ensoleillé.')
		regionID=regionID.replace('normandie','Normandie. Il y fait 11°C et le temps y est ensoleillé.')
		regionID=regionID.replace('alsace','Alsace Champagne-Ardenne Lorraine. Il y fait 9°C et le temps y est ensoleillé.')
		regionID=regionID.replace('bourgogne','Bourgogne Franche-Comté. Il y fait 9°C et le temps y est partiellement couvert.')
		regionID=regionID.replace('centre','Centre Val de Loire. Il y fait 10°C et le temps y est ensoleillé.')
		regionID=regionID.replace('loire','Pays de la Loire. Il y fait 11°C et le temps y est ensoleillé.')
		regionID=regionID.replace('bretagne','Bretagne. Il y fait 10°C et le temps y est partiellement couvert.')
		regionID=regionID.replace('limousin','Aquitaine Limousin Poitou-Charentes. Il y fait 13°C et le temps y est partiellement couvert.')
		regionID=regionID.replace('auvergne','Auvergne-Rhône-Alpes. Il y fait 9°C et le temps y est partiellement couvert.')
		regionID=regionID.replace('languedoc','Languedoc-Roussillon Midi-Pyrénées. Il y fait 7°C et le temps y est nuageux. Attention, des orages sont prévus !')
		regionID=regionID.replace('paca', "PACA. Il y fait 8°C et le temps y est nuageux dans l'ensemble.")
		regionID=regionID.replace('corse','Corse. Il y fait -1°C et le temps y est pluvieux.')

		$('#infosRegion').text(regionID)

		console.log(regionID);


	});


})