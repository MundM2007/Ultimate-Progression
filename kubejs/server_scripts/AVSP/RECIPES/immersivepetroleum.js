//   #    #     #  #####  ######  
//  # #   #     # #     # #     # 
// #   #  #     # #       #     # 
//#     # #     #  #####  ######  
//#######  #   #        # #       
//#     #   # #   #     # #       
//#     #    #     #####  #       
//
//IMMERSIVE PETROLEUM RECIPE INTEGRATION.
//BY NEEPNOOP & ANOKKA / 2021
//
onEvent('recipes', event => {
	event.remove({id: 'immersivepetroleum:asphalt'})
	event.shaped('8x immersivepetroleum:asphalt', [
		'SBS',
		'GWG',
		'SBS'
	], {
		S: '#forge:sand',
		B: '#forge:bitumen',
		W: 'minecraft:water_bucket',
		G: '#forge:gravel'
	}).id('avsp:immersivepetroleum/shaped/asphalt').replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')
	event.remove({id: 'immersivepetroleum:asphalt2'})
	event.shaped('12x immersivepetroleum:asphalt', [
		'SBS',
		'GWG',
		'SBS'
	], {
		S: '#forge:slag',
		B: '#forge:bitumen',
		W: 'minecraft:water_bucket',
		G: '#forge:gravel'
	}).id('avsp:immersivepetroleum/shaped/asphalt2').replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')

    event.replaceInput({}, 'immersivepetroleum:bitumen', '#forge:gems/bitumen')
    event.replaceInput({}, '#forge:bitumen', '#forge:gems/bitumen')
//
//fin
//
})