/**
 * @author TristanVALCKE / https://github.com/Itee
 * @author moraxy / https://github.com/moraxy
 */
/* global QUnit */

import { DirectionalLight } from '../../../../src/lights/DirectionalLight';

export default QUnit.module( 'Lights', () => {

	QUnit.module.todo( 'DirectionalLight', ( hooks ) => {

		var lights = undefined;
		hooks.beforeEach( function () {

			const parameters = {
				color: 0xaaaaaa,
				intensity: 0.8
			};

			lights = [
				new DirectionalLight(),
				new DirectionalLight( parameters.color ),
				new DirectionalLight( parameters.color, parameters.intensity )
			];

		} );

		// INHERITANCE
		QUnit.test( "Extending", ( assert ) => {

			assert.ok( false, "everything's gonna be alright" );

		} );

		// INSTANCING
		QUnit.test( "Instancing", ( assert ) => {

			assert.ok( false, "everything's gonna be alright" );

		} );

		// PUBLIC STUFF
		QUnit.test( "isDirectionalLight", ( assert ) => {

			assert.ok( false, "everything's gonna be alright" );

		} );

		QUnit.test( "copy", ( assert ) => {

			assert.ok( false, "everything's gonna be alright" );

		} );

		// OTHERS
		QUnit.test( 'Standard light tests', ( assert ) => {

			runStdLightTests( assert, lights );

		} );

	} );

} );
