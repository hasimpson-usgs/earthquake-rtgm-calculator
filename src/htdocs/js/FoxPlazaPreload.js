/* global define */
define([
], function (
) {
	'use strict';

	var FoxPlazaPreload = {

		load: function () {
			var title = document.querySelector('input.rtgm-input-title'),
			    sa = document.querySelector('input.rtgm-input-sa'),
			    afe = document.querySelector('input.rtgm-input-afe'),
			    button = document.querySelector('button.rtgm-input-button');

			title.value = 'Fox Plaza - PGA';
			sa.value = '0.01,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1,1.1,1.2,1.4,1.7,2';
			afe.value = '0.5696,0.088335,0.02925,0.01229725,0.00564925,0.00275075,0.001385175,0.000733875,0.0003984225,0.0002205625,0.0001235975,0.00006881825,0.0000382493775,0.0000113329875,0.00000134645,0.000000064884';
			button.click();

			// title.value = 'Fox Plaza - 0.03 Second SA';
			// sa.value = '0.01,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1,1.1,1.2,1.4,1.7,2';
			// afe.value = '0.5739,0.09486,0.032775,0.0143475,0.00689675,0.00349925,0.001878025,0.0010358,0.00059415,0.00034517,0.0002041625,0.00012253,0.00007213325,0.000025567215,0.00000481976025,0.0000007196';
			// button.click();

			// title.value = 'Fox Plaza - 0.05 Second SA';
			// sa.value = '0.01,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1,1.1,1.2,1.4,1.7,2';
			// afe.value = '0.57995,0.1067675,0.0394825,0.0185175,0.0095375,0.005212,0.0029325,0.00171955,0.001038275,0.000630825,0.000388525,0.0002462875,0.00015546,0.00006378675,0.000017222395,0.000004026067625';
			// button.click();

			// title.value = 'Fox Plaza - 0.1 Second SA';
			// sa.value = '0.01,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1,1.1,1.2,1.4,1.7,2';
			// afe.value = '0.63325,0.1652,0.0714875,0.0382975,0.0225125,0.013915,0.00887175,0.005785,0.0038545,0.00260625,0.00178525,0.001242875,0.0008658,0.0004343,0.00015854,0.0000594225';
			// button.click();

			// title.value = 'Fox Plaza - 0.15 Second SA';
			// sa.value = '0.01,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1,1.1,1.2,1.4,1.7,2';
			// afe.value = '0.666625,0.203975,0.09389,0.0529075,0.0327375,0.0213175,0.0142975,0.00984025,0.0068605,0.00486725,0.00348925,0.002524,0.00184075,0.0010049,0.00041865,0.000179255';
			// button.click();

			// title.value = 'Fox Plaza - 0.2 Second SA';
			// sa.value = '0.01,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1,1.1,1.2,1.4,1.7,2';
			// afe.value = '0.686775,0.219125,0.1013425,0.0574925,0.035925,0.0237075,0.016165,0.011303,0.008032,0.00579425,0.00421925,0.0031045,0.00231,0.00129625,0.00056815,0.000255425';
			// button.click();

			// title.value = 'Fox Plaza - 0.3 Second SA';
			// sa.value = '0.01,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1,1.1,1.2,1.4,1.7,2';
			// afe.value = '0.70345,0.22195,0.1006625,0.056305,0.03487,0.0228825,0.0155575,0.01083825,0.0077055,0.00554975,0.00404575,0.002993,0.002238,0.001298725,0.00060305,0.000291495';
			// button.click();

			// title.value = 'Fox Plaza - 0.4 Second SA';
			// sa.value = '0.01,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1,1.1,1.2,1.4,1.7,2';
			// afe.value = '0.686575,0.190525,0.08339,0.0461125,0.0284125,0.01859,0.0126075,0.008814,0.00626275,0.0045245,0.0033135,0.002446,0.0018224,0.001044275,0.00048025,0.00023287';
			// button.click();

			// title.value = 'Fox Plaza - 0.5 Second SA';
			// sa.value = '0.01,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1,1.1,1.2,1.4,1.7,2';
			// afe.value = '0.68385,0.184325,0.0791475,0.0427125,0.02567,0.01636,0.0108535,0.00736975,0.0051105,0.0036035,0.00258175,0.00190525,0.001416525,0.000805075,0.0003642,0.00016965';
			// button.click();

			// title.value = 'Fox Plaza - 0.6 Second SA';
			// sa.value = '0.01,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1,1.1,1.2,1.4,1.7,2';
			// afe.value = '0.6586,0.1573,0.06519,0.03458,0.020515,0.01295,0.00850475,0.00575,0.00396575,0.00278575,0.00197675,0.001430775,0.001059025,0.00059955,0.0002688,0.0001250225';
			// button.click();

			// title.value = 'Fox Plaza - 0.75 Second SA';
			// sa.value = '0.01,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1,1.1,1.2,1.4,1.7,2';
			// afe.value = '0.6207,0.1274,0.05077,0.026355,0.01538,0.00958025,0.006227,0.00418325,0.002864,0.002011,0.00142325,0.0010243,0.000744125,0.00040615,0.000178025,0.00008109';
			// button.click();

			// title.value = 'Fox Plaza - 1.0 Second SA';
			// sa.value = '0.01,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1,1.1,1.2,1.4,1.7,2';
			// afe.value = '0.552075,0.0913925,0.0345,0.0172775,0.009817,0.00594825,0.0037775,0.0024835,0.001668,0.001145175,0.000802325,0.0005669,0.000408325,0.000216175,0.0000862025,0.0000349775';
			// button.click();

			// title.value = 'Fox Plaza - 1.5 Second SA';
			// sa.value = '0.01,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1,1.1,1.2,1.4,1.7,2';
			// afe.value = '0.437375,0.0530375,0.0189175,0.009093,0.004996,0.00292375,0.0018115,0.001163725,0.0007674,0.0005176,0.0003534,0.00024645,0.00017365,0.00008907,0.0000334125,0.00001281025';
			// button.click();

			// title.value = 'Fox Plaza - 2.0 Second SA';
			// sa.value = '0.01,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1,1.1,1.2,1.4,1.7,2';
			// afe.value = '0.34305,0.032975,0.010935,0.00496275,0.00257975,0.00145625,0.000864675,0.000537425,0.00034315,0.00022435,0.00014966,0.0001010125,0.0000695725,0.0000327425,0.0000114685,0.0000036851';
			// button.click();

			// title.value = 'Fox Plaza - 3.0 Second SA';
			// sa.value = '0.01,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1,1.1,1.2,1.4,1.7,2';
			// afe.value = '0.220425,0.0153475,0.00447325,0.0018305,0.000863425,0.00044575,0.00024815,0.0001431825,0.0000844875,0.0000514025,0.000031915,0.0000202,0.000012458,0.00000472835,0.00000099271575,0.0000001943025';
			// button.click();

			// title.value = 'Fox Plaza - 4.0 Second SA';
			// sa.value = '0.01,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1,1.1,1.2,1.4,1.7,2';
			// afe.value = '0.1516,0.008575,0.00217225,0.000789275,0.000337925,0.000159665,0.00007951,0.00004186,0.0000225905,0.0000125325,0.00000657335,0.000003450875,0.0000019146925,0.000000489925,0.0000000667075,0.0000000092575';
			// button.click();

			// title.value = 'Fox Plaza - 5.0 Second SA';
			// sa.value = '0.01,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1,1.1,1.2,1.4,1.7,2';
			// afe.value = '0.111675,0.005448,0.001265625,0.0004337,0.0001775975,0.0000803975,0.0000397975,0.00002037275,0.000010684325,0.00000551265,0.00000286221575,0.000001533825,0.000000847183,0.0000002805,0.000000044125,0.000000006255';
			// button.click();
		}
	};

	return FoxPlazaPreload;
});
