'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ff774c1f9d2cc8db5faa70f59f5f9be0",
".git/config": "353a2e8938f7abf463a4dd637b12d121",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "23646e5cdc480c5754f8f1ae15f04e42",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a52b3d66be158860c884221135287ad6",
".git/logs/refs/heads/master": "a52b3d66be158860c884221135287ad6",
".git/logs/refs/remotes/origin/master": "6da0b6fab2d499ca3e0fddbd9f3885ab",
".git/objects/00/9bf3ac7fd8753f29ac1eed68fd215e32719314": "886a80c2d10baaffe71f9cf0dff9002a",
".git/objects/00/9ee526858b88a0bbc87b13eb9d6baadff94b45": "ab3d1c03cfb19f8f2958b669c9806723",
".git/objects/01/ceb172423f70c1f620d1faf756bf0104bb9219": "c0a69f30945d36b5e6372976519154c6",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/05/2f0abddabe5f9c3ed4e034a018c28fc03aa81b": "55a48fe355d4a83384b33d921fb8d852",
".git/objects/05/86224f701656e1d5831692f103ab5ecb59b4ec": "161b3e312ae5ed139dd2e60f42b147ab",
".git/objects/07/9a8eaa1bdb5b10c2f6cfaf9c03bc2388152284": "b046a1c03208aeb08dc19099ee23f3b9",
".git/objects/0a/064ea630cf03c4608c8874a1595faa155240b5": "d73faaab4a041e9afeb478335bd7a869",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0b/8de483d5e5ecfa22e61a332707a0c1764d2f05": "63485ddd796f5a6be41bd0de3522072d",
".git/objects/0d/3cd6013143b8a33c2630cb5f8735061e9580c8": "9d94b92e4321066f0253babb2154beca",
".git/objects/0e/6d49aa13a1110562c05ccf32dabaaa116a2e98": "e1e6e0ee208d904fc760ba93c5293662",
".git/objects/10/d84bc029ca211a0bdb2c8edeb1476ea36423ca": "a8f53e97718aaf019c1ff2a8d5a97b16",
".git/objects/15/157e510ec0daf8ad9739f71b246a12c03d18b8": "aaef457f9412f133d3fdfa67abe438e3",
".git/objects/15/17d4350b6d9d03fbff6a7b2a4b8cefc5953655": "74ea0375a4f0148484b2fc07c773d28f",
".git/objects/19/f7f8c1744e9c9ba5e22ca583947334f92e7e62": "0058dbc663b24a9c74a104dd61a094eb",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/21/2cb716f5b2ac4c3a2751d74543c12befc3a823": "636727060afa5c2ed1efd7b8b4572afa",
".git/objects/22/816e6b8a1a4b4cd0ab9541a3095da038d594a3": "1a49ed621130e3f58bf07abcc28452e3",
".git/objects/23/83a5b12d313ccd5168224d8c468f6abd17609b": "0cfa20cdf41b091ecae6be8a2fce21b6",
".git/objects/24/4529aa90001a9a4fe937bd06b508a37d47a906": "579fdd552b3b9447595823b551c13bfd",
".git/objects/29/46f596ab9aabe326634a5d4510f4197f916006": "8582cdefa74480d98f2df899fd06c2cd",
".git/objects/29/b093280441caa157b6ec87d190842ea07b6921": "9198d8663884c21d9412ffb7ee76ea64",
".git/objects/2a/c9fea6bdef7325088d68ea88cee6ecf28fda35": "30f15e7236596925a57f862d15226b45",
".git/objects/2e/016e55f8e2270e5c92798d7821fdd555bd06bb": "2eb3d47a577ddf96dbd0539b3788f884",
".git/objects/2f/804ca3167546f337d5e8665cd5359149a531d6": "37cf727f2856691f4b78fa961232a121",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/521a4de2e4c8801ff8e5b4dd97747666830aee": "d79da456ff7fc0e33638303bde545ee3",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3f/5254643d5fbff98a8c35a1cc46de2d90a88588": "54f7752f03c8df8ed87851655dfbe582",
".git/objects/42/7a3aa78bdcac460f18d356b9a68661c60cd5d9": "68d9ed3bda32bfda62d2c73c03f5702f",
".git/objects/45/c44f6cd805e4da282048d4b8d9782d0ab0e938": "1fef1bdf9bcbf95e9d01432179e7ade7",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/7bdaf03e9da9c5b26031398529524ef3e9d5cb": "b6f834a534fcc130ee4e31145ec846de",
".git/objects/4c/bec63a2048302daa063b3460a64a9243b47401": "1ee158fbadc13ac894706b83ee01e64b",
".git/objects/4d/e6e17e73f97cc542274959b1da06ea62ee5569": "8b0a87c9c48164b47816d8d82b922a9e",
".git/objects/51/0e1fc039d9456debd51117d017f5b592106d5d": "546c52fe280e4d5d2833f6bc52378e31",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/52/4e5b470c6dc26a6ae3be34c0b798326afa73f9": "aac277fbcd3d08d3ced1abee425c0137",
".git/objects/55/d8fb8cbe5c97bea2c7fe4778f6eebec59fe0d6": "8e635f469cf4dfe724144ae4b1cfad26",
".git/objects/58/46e94619a242e1261e2966b8c3ab1a9a725027": "0e40df508f9b9ce0602b5962913e01db",
".git/objects/5d/87acb2b83e74cfb75b66e942ba2fb79a653ea2": "ee3c652a00d9d3a84ed274a23be66607",
".git/objects/5d/c0f00e08ac3218e0c0599df9b9bd84e3c8dcbe": "5c1e5f5feafc0b65a3a8dfef3261924e",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/68/3fe4acaac708755eed3be43af17f59b65dc7e4": "8af37325c93792f241e2149b5aa85553",
".git/objects/6d/1570f135dac76dab450c8a8e9568521dece1de": "66bec683ea5ec3352f0b9173ada513d1",
".git/objects/6d/524b884f1f569958b61f3d3ea0b29458790e61": "1bca561e28c3c6c1f97d3ea084c056d3",
".git/objects/6e/531d65175c60a8621a1d079534106a0a2a7820": "c6ac2bf6254022d56d542d7121a2314c",
".git/objects/6e/5b4df3fc09a9d576777a96556523a851ea0e76": "0d5796c9500eb118fe231a36919eadbc",
".git/objects/6f/24a975b0911efd919b56a3bb90cadc68085df1": "c7ead779413e61d2441eb6120b489a25",
".git/objects/6f/b4a124c055d014006989590048ee6103e3b092": "6f03cd380fb28951e018258507869cb8",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/70/45c8e19063f1f280bef6355230d0315b371667": "0ef4346453e139055e5c1b5f5dfbe81f",
".git/objects/72/edb0d32c0dbe06618da212c9cafd99a83f00e0": "5a5fdd81450b81d685b5ed42aa1002e2",
".git/objects/75/66b7ac22251cba18bc2954731f5b06f92202f6": "f91fa289415787b988b05184c5d5a606",
".git/objects/76/de09c3542259f516008ce525e8702588b5452b": "60473cacc556e439b12d7194ff86b7c0",
".git/objects/78/fedbffc7c3659990daf965ecca752e80699afe": "e315fc5cfa36886635a510d4456f6862",
".git/objects/7a/19e8603e87d361acc57c42c29716bacdcf5ee2": "91a855b4ccc8e2f32bb7be99e946021a",
".git/objects/7b/4f62855f46b7648b487ad35c688ac992728318": "474d4421d5632f748ff20f2b57f71874",
".git/objects/7e/18a7ea4aea691448355a00ba6ea62216c6f998": "6994e3b5cca744acd0d78df79aed1691",
".git/objects/80/805ed07523664b1c455d1e71fbf839170900d9": "9f53c3da28d6ca4bc9746baea0641c96",
".git/objects/84/12016c453f78f9103ae42283d9582c225205ea": "2dd0a1cfcfdaf16a1fa4d6c139062b7a",
".git/objects/88/854fb5203d80eccdb2c4c012eb1e52a8ffacb7": "dcbaf70c6ea136da84e32edb56bab6c5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/064e72d43f7f260fb406db83f451570b62ad7c": "de8cca17a4f58d853a0d9c4d4b84e479",
".git/objects/8c/032470f1efbab086fcba8e0e68532d83e552b9": "99a246fff2b60352f15069967c7d845a",
".git/objects/8e/06c709f95fc47af5a8ecf882ec36cfd1b52017": "cbe477f902f07b8a5c089b1158281cab",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/92/3f64ce2f7023df47a51fb29d547c537b8dfcd7": "719bc7299428f2e6ad6d763410fd2eb6",
".git/objects/95/9df0c530ff6e847c943d7016ee09f450257817": "88615870751c0555100caa5e27f9601d",
".git/objects/95/d5fd4b5e03d2f86c44f759093eed9ab9331c42": "f451907aef62fc4c42b788b53293da58",
".git/objects/9b/63f3d400482f2c58bc882d8a10e2c22170349b": "d429cfe51c8fa0265ba874fd097bf929",
".git/objects/9d/472c10f89d253d44fdba9fabdd8ac2390bb955": "03742342ed5acc2ee8ed0dad4576fd0d",
".git/objects/9e/708c4d11133947ed2a784b33a7a56d97ecff3c": "307e6d4951e59ae983d2f03d678b53c9",
".git/objects/a3/1337b9bfada7898a6351c86d60e48aadae47cb": "700d5025c77a2858b84e40cd2f4fd297",
".git/objects/a4/84a27d2d963bef3b6fb919b8b0a194c5336ff1": "62d78babc40216752ae28f1b553a5798",
".git/objects/a6/3b644366c2cf30383d3acfe5c3a1fbba42e16b": "e8027ec40728a2972d16818f3617d6cf",
".git/objects/a6/57e4716d5b58ebda357e6aab9e02207be51a0c": "5c1cd89b19f9acf81a334d85e4b8d303",
".git/objects/a6/9af28e1b8f0e10eda31f301f26197eafd4726f": "9d2360f5077054fec957af37d6dacfa0",
".git/objects/aa/9033a801f73539a025d9f4012fa823c27ff3b1": "6489b5eb717a3de0e8081066d4570d80",
".git/objects/ac/88a003b10f0866fe52a46e6f2a0345ba5873e0": "1f527099eb4fdf24abad47cfa6e9bbb8",
".git/objects/ac/c703ec58326797132ca522307ad246cba538c9": "adaec395ea056a9e6bf3c3b74a2a452d",
".git/objects/ad/56d9175ea449d07b8ae2814130fbce595ba741": "6263d28a9ff320117fe8bcf922d2758d",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/ae/8f0886cd0a022e8ada27b11e3dd16e93ae4357": "c3f2a3a472f820668e2aba59491613f3",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b3/a472d14dbea3a41c08d73140cfecbfb3dbe5d6": "b20388cfc83aa209bc4b0bde59ecf742",
".git/objects/b4/816aa30260da62e238cebb392922b2a7248399": "d2b9f2ff53edccdb388da587d0e1632c",
".git/objects/b6/da9a7a4eb016386e334494bd8d62e4b1afc2d8": "b9f294b59b5458b96217d9394e17d75a",
".git/objects/b9/b2c004862b16c562d2db159d6f960a4d9b6e2d": "18b9865e80583936a55d6c10e9a1e891",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bd/897ff0f8595b90f829c1e60bf8fa745ad58eb7": "141fabb3d88b4fae159cd4cd9d9588c2",
".git/objects/c2/3ff56ba1b965140969d2a8800e861d082aea13": "9a349056c2f167ccc11436d509ce33fc",
".git/objects/c4/784b744ba25f412af7831c1b8970ab964f772f": "8b19e3c90d68bcfaac2c556d4c34e5e3",
".git/objects/c6/252ca7a9dff5abb758f6916b620e7f99378ce1": "02f4892654cf6bb5e635456774628316",
".git/objects/c7/c09f26f72549065652c2af836bd9a9fc8eba6f": "5dc59a0d6d1e393bda014f22a8f8c609",
".git/objects/c9/77c221063fd6e02ff81a74556662b69e501c74": "01173ba434c3f70dcd1511edea3c2221",
".git/objects/ca/461b48809bcec2ac58e81aa807f61a70ee8b02": "2ace6c82255b2ce7fdfbff89d283ed6a",
".git/objects/cb/da105159ef39b57286f5d76ab1e8fba4ca590d": "deadf2c10bae3976c61ff0349f2e786c",
".git/objects/cc/cb9ec448ff8208b74db811de2ec8d27b4031a3": "0b3c565330736bd3caeb933b50f65839",
".git/objects/cd/ada93cab8e819786f34a96d9e04dac1168533f": "a569a67b8e5e0be6e379ffaaae0263ed",
".git/objects/ce/af0e0c352ece211d2a00338379ece3b6c13bf1": "96841f9d77c2b51d88ae8e38f169d527",
".git/objects/d3/0174aade7a1ad60a096e52f4ae164aaf351627": "8353374295414b5f032a96fee2d77b3e",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/26bb7ab7ac648d86ee2619aa232c8a33da8d2b": "7001f2b215d2758f7211eecbcd32f313",
".git/objects/d9/c4af71177c9944d14f2e6f73ee09f7a2f93936": "ef249dd226786c1439ae4ab4cf9350dc",
".git/objects/dd/e68bfee8b8f537424513c769851038b8747584": "e61a45b3b672a5c5f97218e893d1ec87",
".git/objects/de/71ec5bd76b1c8185de024cc042a3afcf79b71b": "6c45acfe65d0cf29400efcd61940ac9e",
".git/objects/e4/91a0912d77d3b41d4718318a9b2e140e95c013": "06b2097d2aec1ea6af6a76d45ae4de20",
".git/objects/e5/ab55aca58db7d23c8d7bcee8bf78ca199dcf6b": "500c23fd1056e1663b45019e88f71f6d",
".git/objects/e6/bc9c96234fdc73c71b4949823468ee88e15f4e": "ddc8c90fc80eac5579703fc839426842",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e9/a3ba6fe1b8486a27ce7ebf52edd80b0e9c1bfa": "814a04f88d194a1f09fafaa172bb4d60",
".git/objects/ea/b7161960b0248da45b1052763eebb142e5a8f1": "c510244347c6ccee49345537c6a58e04",
".git/objects/ee/bff13cebd31c223b150b25945d71f5f09b0eab": "c9f9e7c9662e2b00bb5595628b3e82be",
".git/objects/ee/dbb1867015dfef8583109c9dbba74a618c2df9": "04da150c8bd67ee6a613b2340ca15fe7",
".git/objects/ee/e45ba97c0ff8a2304c14a23874170105867c0a": "4a45053c3102a273219b7e7682995b85",
".git/objects/f0/1d2ff241cfe9e6feb1992822f9b905a2c9bd2f": "f02b26e317b33d6590d2258a82353e73",
".git/objects/f0/838026c92a28269e956fd143c029c50e9f972e": "f3f03fbeffd14afe34acffb2c5094dee",
".git/objects/f2/01bcdfae6d0b29b292eb5e9eeec97f71be824e": "811d9170e9428c92ea3345a6490d446c",
".git/objects/f3/e86c58719691a8b8c7534a6bfcb4af34cb637b": "ae24d7441e38f79e8404c013649e79a8",
".git/objects/f4/22a64e1fb42ee2ddab977535450137e6af0829": "b6964e784f7f123e2df78ad9a5550051",
".git/objects/fa/b5321714766c3a535a044ade63a11cfd7fe4f7": "fce5d0ce220c4c53408f803dc2845334",
".git/objects/fb/6a728d407ad83deba0460756d03649551bf85d": "b7e633aa9a323fc76687062a7f280891",
".git/refs/heads/master": "10753be084a002a4423551ee3acb0108",
".git/refs/remotes/origin/master": "10753be084a002a4423551ee3acb0108",
"assets/AssetManifest.bin": "08c677888b2923695af49b9605bad601",
"assets/AssetManifest.json": "e3c70b549f8010fb6ea43f752279c285",
"assets/assets/AssetManifest.bin": "e694e9f8175adcdecdec3c9564b6ef1a",
"assets/assets/AssetManifest.json": "0ae9c614222ecd2b7777753eb43fa6cd",
"assets/assets/dashboard/addemp4.png": "c9e2893ef5f04389361ee18a25806f95",
"assets/assets/dashboard/addemployee_1.png": "78bf4f32a3e27cd23cb9942b8f7973ff",
"assets/assets/dashboard/addemployee_2.png": "7cca31ed7896147b2391caf4aff75c8f",
"assets/assets/dashboard/addemployee_3.png": "06387fb1e0800e7ae8a9f00c491bf900",
"assets/assets/dashboard/addevaluation.png": "871d747979a1d04664d7a6555ebbe1b7",
"assets/assets/dashboard/addevaluation2.png": "2448401487ab2a7725b6eb17028440b4",
"assets/assets/dashboard/department.png": "57e14f12df8b4840a81a2c33090ed3e0",
"assets/assets/dashboard/employee.png": "41d9a7bc618c947ca018044592a0b39c",
"assets/assets/dashboard/evaluation1.png": "30904b35b262b64240fd96d8c99a9827",
"assets/assets/dashboard/hr1.png": "f000363037c92e6d796f7b63eca1e02a",
"assets/assets/dashboard/jobType.png": "e790a10686b59dd36a6b8a5aee86abb7",
"assets/assets/dashboard/searchEmployee.png": "4371755a42f06cdee4f0c6b5f842a40e",
"assets/assets/dashboard/shiftType.png": "b4fabd5d7366c31f55fe98fe7653c4c3",
"assets/assets/dashboard/showemployee.png": "1cf1e90e7221aecfcf5794c2defcda68",
"assets/assets/FontManifest.json": "e00171bfa9bab92b9c2a50352e16e8c9",
"assets/assets/images/aboutme.jpg": "bb6cf34065164f9e9368e72310b64bdb",
"assets/assets/images/analytics.png": "610a95aedc2c0c32d1316562dc8ec248",
"assets/assets/images/api.png": "fa3917f6b4c23098e954a5d81065c60e",
"assets/assets/images/backend.png": "b1fde05667b8b7d8f89bd01be0a04fd8",
"assets/assets/images/bloc.png": "b6b882a29d68c670caa05d9f0beafdc4",
"assets/assets/images/brush-stroke.png": "41854d93cc2b183ac9bf55e4b5097846",
"assets/assets/images/coding.png": "af1b456dad3dd6f43f14994963b57316",
"assets/assets/images/database.png": "9f54745fcf0298161aa678a172d03866",
"assets/assets/images/email.svg": "f6b91e44fc244316e4c8eb43a5a84524",
"assets/assets/images/face.png": "3e569c0b44e18cf4ac36c2f52ca2c4fc",
"assets/assets/images/git.png": "7b08b14f30c2110a685bafcd33e8a480",
"assets/assets/images/git2.png": "62df7b3ff18594ae62ffd1c58fda68f8",
"assets/assets/images/in.png": "a65bf53ef6a1d1555120edfc1810f551",
"assets/assets/images/insta.png": "bd3f44e94e19e2cd2fed522e65f67657",
"assets/assets/images/location.svg": "ed3c360ddc71a7d8f5712319b7b96d8e",
"assets/assets/images/menu.svg": "d84e1ab5e3863e3b969e5725747ba740",
"assets/assets/images/mobile/1.png": "2ccd41adc5dddaeda6bca27f46eeadc0",
"assets/assets/images/mobile/10.png": "3823170081e63881eb1f297bb18b5935",
"assets/assets/images/mobile/11.png": "ad23342df8f0069324109b4fffc1bf89",
"assets/assets/images/mobile/12.png": "9cf676b1692173aefd0a69d57b6bb1fa",
"assets/assets/images/mobile/13.png": "dc778b54c6ef4237bd3aa3d77b91e298",
"assets/assets/images/mobile/2.png": "129a3c52441904af303b8fd1f2e6dceb",
"assets/assets/images/mobile/3.png": "ce519c837f631c6d6880761edf7e1117",
"assets/assets/images/mobile/4.png": "3d081f7b70fd4e66258acc7914de2605",
"assets/assets/images/mobile/5.png": "f5a8ef3fa27b9dab789d3683187d4868",
"assets/assets/images/mobile/6.png": "1e7a9f0bde7fe4e029dbce23470a438e",
"assets/assets/images/mobile/7.png": "620855d94cf47eb1508b26972011e344",
"assets/assets/images/mobile/8.png": "5137be3d3adf7d4c76d5dddf6558d905",
"assets/assets/images/mobile/9.png": "91fbd3499acdd072e332349d6a529975",
"assets/assets/images/mohamadAlkowatli_cv.pdf": "a95be9c30a4e54b0828c9480caa52ffa",
"assets/assets/images/phone.svg": "cfa5f175e39721645e65e54df1ff2f0f",
"assets/assets/images/portfolio.png": "4fbdaec2f7b0c4c6f7acf74fa2af1b02",
"assets/assets/images/pro.png": "a618dc4969d82a6d2ece39a7ee5d11f1",
"assets/assets/images/pro1.png": "0cd08ec9a063ef198a6c5f4f6207ed5d",
"assets/assets/images/setting.png": "6a6d40c8fb6991d35d58dd647fc235d0",
"assets/assets/images/share.png": "7d05af750cd03cdda7f247d7dc8b532e",
"assets/assets/images/up-arrow.svg": "2028e07807a2ef7b5f09a20adc4c3cee",
"assets/assets/images/work1.jpg": "58bbc11e54a3643754df21fd0d1e59a8",
"assets/assets/images/work2.jpg": "8ac2eef16dd7a05a53702e965891c948",
"assets/assets/NOTICES": "a4d48224c8ab69f2ac043aa7abc6b4ac",
"assets/FontManifest.json": "e00171bfa9bab92b9c2a50352e16e8c9",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/fonts/Montserrat-Italic.ttf": "761177c558bb3a0084aa85704315b990",
"assets/fonts/Montserrat-Regular.ttf": "3fe868a1a9930b59d94d2c1d79461e3c",
"assets/fonts/RubikMoonrocks-Regular.ttf": "d600125e8597b91eff5e33fa3ba79be8",
"assets/fonts/SignikaNegative-Bold.ttf": "2f9c7284cf29739530b46ebe5bd55c55",
"assets/fonts/SignikaNegative-Light.ttf": "39e2f173bebb27d5656dfab3cfe61c00",
"assets/fonts/SignikaNegative-Medium.ttf": "60ccb87c113c745a7bf3cc1bc4f09bed",
"assets/fonts/SignikaNegative-Regular.ttf": "5189e01abe7eb315d8a324ceb971b6ab",
"assets/fonts/SignikaNegative-SemiBold.ttf": "ae8e354eb18998e7559f3a188427a497",
"assets/NOTICES": "d8ee02121057c104cbfcc1610138f31d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/android-chrome-192x192.png": "3adf473adec53930fb7f718d7347450e",
"icons/android-chrome-512x512.png": "857e99a0486d331e41dafa013eadc87e",
"icons/apple-touch-icon.png": "2418735898f1610ec14659032aa17afc",
"index.html": "377e6a1eb562f326a083f160296cf132",
"/": "377e6a1eb562f326a083f160296cf132",
"logo.png": "3adf473adec53930fb7f718d7347450e",
"main.dart.js": "76b66e7eb6b1997a9b9342860e0fb78e",
"manifest.json": "9489fd5631ba1e20b033acee24aa6a18",
"version.json": "fb8d4678888024cd5f83d8522bb3a722"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
