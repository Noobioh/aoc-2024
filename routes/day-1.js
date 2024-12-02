const express = require("express");
const router = express.Router();
const app = express();

const leftList = [
  28186, 51854, 19211, 79370, 68126, 43284, 80565, 83151, 91092, 70740, 45166,
  24309, 62950, 23291, 56683, 22308, 83150, 87443, 56834, 35159, 10722, 92257,
  15995, 89901, 25104, 37075, 15874, 33493, 87420, 11269, 92604, 34888, 49759,
  38211, 93866, 88205, 55772, 83556, 22292, 22487, 27260, 74570, 27532, 40720,
  99885, 25733, 12466, 88402, 63328, 45165, 24913, 32251, 91004, 48939, 98082,
  74569, 99641, 42748, 23376, 38706, 64985, 14431, 37671, 27425, 21801, 96975,
  56680, 41265, 99081, 53077, 54490, 22649, 82601, 93133, 77182, 67827, 45976,
  20352, 28891, 87739, 47802, 18060, 65882, 53343, 84301, 62547, 79067, 70139,
  28158, 71631, 36521, 78928, 75943, 28462, 95828, 49768, 40545, 18963, 17934,
  73054, 43170, 90257, 99765, 41380, 24225, 66579, 73361, 26339, 84080, 89322,
  84610, 58420, 12253, 25631, 71764, 52908, 56578, 99876, 43934, 78242, 97629,
  21477, 97639, 90978, 94412, 49249, 92750, 12961, 84319, 83435, 48951, 40258,
  54600, 51432, 11527, 68196, 14939, 13158, 62120, 20939, 58436, 37198, 59152,
  52958, 64236, 63763, 40304, 86564, 45684, 43139, 99974, 44698, 19940, 29106,
  60431, 50880, 96595, 40966, 64515, 31081, 87614, 82663, 73537, 14125, 51361,
  26084, 82915, 72409, 22834, 93476, 63719, 41505, 56055, 37255, 33468, 70472,
  66290, 91071, 30888, 60826, 12334, 62744, 85449, 22333, 67621, 12605, 32490,
  96639, 82412, 76964, 60776, 68837, 35635, 85239, 15278, 63581, 77006, 88570,
  61499, 57466, 78524, 11821, 62425, 36264, 38567, 16357, 17202, 64290, 76075,
  87325, 93961, 49866, 91725, 44721, 44065, 22521, 28070, 45621, 54677, 79647,
  89613, 86493, 16243, 12832, 43847, 75859, 69276, 43251, 96012, 35482, 45380,
  66801, 79199, 33087, 40619, 67655, 22431, 62731, 29873, 99354, 36415, 29742,
  64872, 93028, 32784, 87488, 56652, 49968, 82653, 30377, 40120, 88404, 69179,
  99645, 44883, 76320, 29057, 28502, 73459, 96354, 77589, 51381, 40490, 36023,
  13434, 27250, 13764, 28229, 56430, 98593, 11192, 81601, 86908, 25484, 31115,
  75124, 96785, 59814, 17024, 81701, 43938, 91646, 96616, 73270, 75876, 53007,
  39527, 35936, 95194, 96876, 68136, 31253, 98767, 98353, 13239, 43374, 36658,
  58030, 42686, 99419, 43976, 33361, 23794, 26896, 12213, 53827, 71874, 19394,
  63728, 63780, 34161, 81832, 20986, 36631, 60232, 37744, 46964, 19771, 75783,
  71727, 60541, 68594, 51619, 26797, 86654, 98872, 20079, 60408, 37203, 92078,
  94853, 91937, 39800, 14179, 21846, 19081, 60170, 14482, 61946, 88464, 93401,
  42260, 92730, 17708, 68523, 44540, 12785, 34598, 20161, 15318, 67423, 13951,
  63011, 73505, 22300, 35181, 70531, 95954, 65463, 67270, 62726, 66690, 99591,
  89300, 82383, 55326, 66315, 51554, 21778, 38569, 25915, 92411, 76148, 68688,
  78063, 27804, 79316, 14222, 83018, 36304, 46381, 23167, 73696, 83569, 93902,
  33606, 30257, 24956, 64619, 17640, 22908, 18954, 89497, 70303, 37979, 22661,
  96573, 13055, 73265, 31927, 61607, 62232, 68738, 50586, 55731, 33386, 20118,
  98794, 62869, 45508, 29960, 20228, 75424, 75421, 82307, 26488, 48430, 81439,
  68896, 67511, 40446, 13668, 83234, 16929, 42735, 93954, 98252, 39418, 14183,
  67167, 88731, 42317, 29404, 80844, 43255, 61762, 32255, 93152, 42141, 83740,
  40030, 34668, 46752, 26196, 45243, 26757, 13969, 13148, 39362, 92819, 12210,
  58671, 87279, 97755, 77086, 87094, 83398, 36525, 27346, 50274, 74438, 86182,
  63946, 99269, 46815, 44645, 82027, 46981, 52039, 25930, 48743, 80123, 21790,
  91556, 63961, 11280, 67372, 35817, 80767, 32458, 53471, 76699, 33967, 83166,
  48974, 28408, 18980, 76595, 54278, 57836, 16791, 52746, 23543, 28819, 21590,
  90588, 62879, 35788, 67595, 43342, 34072, 41533, 77769, 95215, 37630, 85291,
  82845, 56633, 95645, 59689, 77873, 47892, 71442, 52932, 68699, 70296, 34780,
  14008, 65865, 64689, 70986, 20034, 21194, 42510, 80906, 38289, 44371, 45873,
  72359, 26200, 81093, 75520, 70526, 38000, 42109, 65858, 77533, 84191, 59480,
  20750, 81791, 49948, 44960, 49084, 46948, 22467, 32066, 47715, 40689, 81797,
  48102, 13286, 24324, 14772, 10721, 26990, 67169, 42848, 24672, 86122, 56904,
  81436, 94624, 91853, 23675, 26625, 22777, 44833, 47549, 79529, 78188, 16287,
  64231, 84131, 15378, 69506, 80392, 68681, 95565, 27128, 11911, 32463, 64051,
  59409, 85311, 15025, 31085, 57046, 31356, 53445, 65374, 94347, 51998, 38930,
  13223, 23412, 33498, 66922, 19340, 30800, 63834, 26329, 36202, 99460, 10752,
  83677, 83136, 43505, 49792, 18430, 48959, 27559, 42055, 47346, 95130, 67175,
  80717, 98758, 69621, 25596, 37015, 14944, 70867, 14464, 11365, 78435, 45002,
  57900, 99650, 80681, 64811, 97586, 42094, 76669, 74600, 18109, 95834, 76583,
  23271, 73123, 81442, 97274, 99106, 19847, 41705, 97824, 34982, 47246, 94716,
  52266, 39216, 49351, 64910, 43455, 71500, 30651, 63267, 17567, 63046, 51483,
  35182, 73961, 39993, 26258, 52698, 21525, 47513, 13140, 43778, 22788, 84367,
  54265, 55305, 78923, 40429, 12422, 24878, 64356, 34812, 54661, 31004, 38061,
  85827, 72862, 51636, 15448, 90048, 53851, 48530, 20386, 87273, 83022, 98251,
  89295, 98142, 31571, 92874, 44965, 51688, 93890, 65530, 55006, 49672, 31815,
  13567, 60844, 63845, 98712, 99601, 14173, 11249, 37023, 25248, 25444, 92822,
  43060, 98283, 10004, 69379, 30459, 81481, 47130, 57377, 24043, 78319, 96058,
  42928, 76838, 43659, 36827, 41007, 79655, 26608, 85420, 81174, 79223, 54106,
  71917, 19775, 45391, 26838, 53437, 71922, 67552, 23842, 75398, 20264, 38278,
  62780, 92766, 25677, 55791, 63556, 97511, 74712, 34605, 57436, 91202, 11656,
  31838, 94443, 84090, 63298, 60339, 25780, 55284, 83080, 53843, 83616, 89091,
  71899, 57786, 34559, 77211, 67812, 26511, 51963, 81350, 37978, 93413, 38133,
  73234, 60624, 13937, 35804, 36210, 34190, 30736, 80091, 60917, 30227, 94439,
  78308, 51009, 64010, 20563, 43967, 86436, 80389, 94453, 41805, 21462, 71157,
  35046, 96103, 83069, 18285, 26446, 70874, 10539, 57999, 25966, 37570, 46126,
  65025, 48404, 26116, 84857, 84369, 79609, 24415, 55288, 85869, 15152, 10609,
  56293, 35563, 15144, 27560, 10484, 73264, 44774, 41294, 14411, 17065, 25771,
  58907, 93527, 25715, 61620, 36485, 70191, 40165, 54006, 75597, 49678, 51574,
  57852, 60104, 78607, 54889, 47241, 71456, 81425, 59061, 24633, 14420, 54622,
  17040, 70622, 56992, 97895, 94648, 59138, 97350, 32734, 55320, 96915, 95293,
  13774, 70053, 22021, 41216, 28987, 70488, 48277, 79376, 94225, 60803, 21144,
  23645, 28916, 50535, 62178, 63126, 33569, 99826, 74714, 67967, 83610, 15872,
  34302, 24069, 90147, 95987, 62656, 83153, 68726, 63172, 35390, 29379, 13571,
  16169, 68905, 71763, 48781, 95966, 87862, 87176, 11203, 50294, 21503, 96570,
  25213, 61744, 62795, 84907, 82935, 24224, 91386, 76217, 73872, 41777, 95695,
  88779, 93458, 74732, 23754, 90662, 24013, 66779, 54586, 88285, 47809, 25662,
  31583, 58156, 22656, 22315, 70195, 27027, 32409, 91017, 53096, 92656, 84304,
  45081, 21844, 83024, 93888, 69174, 98465, 46208, 63289, 96607, 62648, 38090,
  87491, 45019, 88050, 18142, 36682, 15933, 17393, 33633, 55662, 63567, 69557,
  36169, 40716, 11665, 94437, 43859, 98937, 73932, 99289, 12403, 80283, 68700,
  36887, 53551, 76290, 49743, 35627, 59070, 40419, 48544, 68680, 31610, 31170,
  27004, 62727, 24189, 42807, 85552, 52402, 78358, 83450, 62947, 55820,
];

const rightList = [
  35627, 34597, 51032, 53096, 40302, 25771, 99650, 70796, 74579, 98650, 53096,
  45165, 26641, 91017, 53851, 81625, 34155, 91017, 91784, 67595, 83450, 23419,
  96671, 39216, 76669, 56652, 66083, 35627, 31838, 91386, 83450, 99650, 40926,
  27379, 22096, 66217, 60776, 78255, 50829, 78358, 79702, 90319, 14353, 67595,
  65688, 53752, 14411, 40165, 13804, 62461, 94225, 76669, 40165, 45165, 34561,
  42932, 54600, 22021, 54490, 69865, 87783, 78715, 94814, 60776, 76669, 33493,
  31838, 71129, 32487, 82615, 55624, 60776, 25943, 96412, 78358, 76838, 89107,
  89034, 23800, 76669, 99650, 28437, 93980, 13764, 93604, 93479, 45165, 54490,
  76669, 39775, 57540, 37888, 39076, 60107, 94225, 73181, 97945, 74260, 63046,
  13454, 60924, 28180, 33493, 50296, 62945, 73961, 54622, 91017, 62041, 54600,
  18344, 87051, 83450, 91017, 63533, 40165, 46636, 61946, 64469, 11111, 28916,
  91017, 64456, 53077, 73836, 96113, 14411, 13764, 22230, 78146, 86109, 13764,
  65577, 53096, 20394, 94225, 91017, 39216, 93587, 71764, 28038, 31838, 17554,
  44145, 18285, 56578, 99650, 78910, 52760, 61946, 76669, 86004, 22021, 78358,
  91386, 76451, 42193, 73961, 61946, 39834, 70892, 54622, 62994, 56652, 35627,
  35817, 20069, 22021, 20071, 83787, 53096, 48056, 20404, 99650, 60776, 22598,
  53077, 67595, 33173, 29871, 78358, 69424, 79500, 16295, 18455, 90059, 25835,
  75870, 39747, 60153, 60776, 39216, 67595, 14964, 83450, 35178, 18285, 80424,
  81689, 47392, 84304, 53989, 28916, 50872, 13061, 45165, 94451, 31838, 55071,
  40165, 99650, 65601, 14411, 18285, 33493, 56578, 54600, 54600, 26913, 24298,
  31415, 13764, 64218, 21187, 35189, 54600, 75826, 14411, 41446, 35817, 82383,
  31838, 92341, 70511, 28916, 80670, 60776, 54622, 25771, 63481, 61946, 94919,
  53077, 55635, 18285, 68734, 18285, 80712, 53096, 24784, 45165, 70120, 45165,
  67595, 45165, 43595, 90019, 61946, 84304, 54622, 14301, 54490, 95808, 27135,
  63807, 35627, 32845, 34954, 76669, 63811, 60776, 72265, 77116, 82383, 42206,
  70148, 53096, 85995, 57255, 41971, 33493, 33599, 81828, 87775, 35817, 83450,
  33975, 17039, 23302, 80147, 91386, 19760, 61208, 86604, 36264, 13764, 22965,
  84304, 78358, 49423, 20759, 47852, 61946, 83450, 37740, 49270, 61946, 77889,
  81025, 72467, 21317, 56652, 99650, 48302, 63009, 84304, 39391, 14411, 69365,
  71252, 69095, 30949, 88697, 50216, 61946, 53347, 18807, 41952, 47862, 43717,
  53096, 65490, 79198, 50429, 72768, 14411, 39838, 36264, 64811, 10899, 44867,
  53495, 76838, 31838, 99650, 95629, 54490, 13764, 28916, 67595, 47864, 95495,
  67595, 61946, 73685, 78358, 60776, 57049, 67851, 53593, 13782, 72865, 33493,
  13764, 51267, 56578, 54622, 91145, 67595, 71437, 80353, 88336, 83204, 61443,
  34003, 14411, 59050, 22021, 18197, 33795, 78358, 99650, 11314, 71391, 76551,
  35906, 54600, 80860, 14411, 56652, 83696, 74347, 83450, 76669, 69814, 53077,
  83961, 85059, 67595, 45165, 54490, 53096, 79113, 95006, 39122, 31838, 97657,
  76669, 57813, 91386, 56652, 95663, 74090, 30158, 11086, 64910, 41174, 63107,
  56652, 33375, 66170, 68369, 16181, 84304, 85915, 22403, 33493, 54622, 89745,
  68002, 22021, 54490, 83450, 31838, 34866, 32538, 78358, 25771, 56578, 22021,
  47353, 14411, 21905, 48915, 67595, 56652, 82383, 84304, 29711, 31171, 14411,
  91017, 62713, 92124, 62944, 40099, 35817, 64734, 36264, 17587, 92593, 13764,
  56578, 25771, 67595, 93146, 25771, 39216, 31814, 54600, 31838, 72281, 84579,
  78358, 14411, 97891, 60776, 34731, 53877, 90108, 13557, 92723, 31838, 23325,
  44826, 16412, 61946, 21581, 82835, 67595, 84304, 99650, 83450, 95078, 84304,
  91017, 43669, 81389, 91386, 73961, 73961, 54487, 71151, 74006, 44436, 18292,
  99650, 60776, 54490, 14411, 23174, 94225, 77808, 56578, 56652, 54600, 50848,
  63408, 73961, 84695, 45490, 54600, 73961, 37716, 32357, 19304, 53386, 95639,
  53096, 40165, 32591, 99689, 92020, 90543, 40526, 64811, 83450, 63489, 46311,
  32879, 76258, 56739, 22021, 12978, 25438, 39216, 41311, 13764, 56652, 82792,
  91114, 64910, 81079, 91386, 20481, 54622, 22021, 25771, 13764, 25771, 13764,
  53096, 33493, 56652, 14088, 68877, 53096, 33493, 96449, 27951, 99650, 51001,
  25771, 55907, 41016, 78358, 64811, 57430, 40165, 40839, 38020, 95974, 39216,
  25771, 99650, 76669, 83450, 43589, 25944, 32566, 24456, 17250, 76838, 76838,
  22328, 33493, 39216, 97888, 13764, 33625, 53077, 76669, 52321, 87180, 22155,
  54586, 94225, 94775, 51024, 87697, 62169, 86092, 71266, 27875, 15327, 50520,
  48669, 93010, 73606, 22021, 83450, 93706, 84304, 80652, 25771, 46797, 58808,
  83487, 55843, 38011, 86071, 33898, 41087, 54622, 28060, 25771, 40165, 32274,
  54600, 81744, 70437, 25771, 91717, 39216, 54622, 64338, 39216, 58999, 78358,
  60776, 95154, 94864, 39559, 84248, 27152, 49103, 44712, 18998, 48579, 63529,
  14411, 60776, 30182, 96243, 77762, 22021, 20331, 22021, 40165, 94225, 31838,
  64910, 42377, 54586, 39216, 63046, 94225, 57593, 40889, 60776, 55132, 63046,
  35627, 33704, 98691, 54159, 67595, 18285, 74924, 81637, 53096, 56018, 65250,
  60776, 15765, 42354, 70979, 58401, 78358, 12104, 53096, 91017, 55977, 37826,
  58321, 53077, 26325, 79314, 63236, 60776, 86708, 48603, 14411, 63817, 10083,
  41903, 89972, 77190, 56652, 45165, 18285, 24016, 56872, 63046, 33493, 33493,
  32466, 35627, 76669, 39216, 60776, 14411, 44836, 68185, 96069, 59880, 52192,
  83450, 73961, 66102, 33493, 76669, 91017, 40770, 12889, 90858, 96094, 39216,
  68287, 45165, 23355, 83450, 93703, 61946, 18285, 15067, 56652, 91017, 54622,
  22156, 25771, 60590, 91386, 56419, 53096, 76669, 71920, 36881, 42743, 68085,
  31838, 67595, 96506, 94225, 61946, 63739, 97847, 23053, 57093, 89804, 60776,
  84629, 31957, 34269, 44626, 53096, 33493, 83057, 23762, 82383, 53096, 56652,
  67595, 67595, 53077, 61946, 17312, 75180, 42825, 83450, 91918, 99650, 10537,
  73961, 74733, 35732, 82383, 76669, 18579, 11666, 83450, 91017, 93089, 18897,
  78341, 61946, 91017, 33493, 96112, 76561, 76669, 37007, 10010, 76669, 52954,
  59754, 99650, 32125, 33493, 99261, 74795, 17094, 53851, 83990, 25771, 60026,
  16393, 90760, 68223, 23456, 15169, 39216, 94225, 99650, 53096, 25771, 96842,
  18285, 61946, 35627, 14411, 10303, 94225, 49149, 28602, 31838, 93613, 53077,
  78745, 88133, 72730, 33493, 44310, 13764, 69918, 83579, 66823, 55216, 38588,
  12822, 58437, 18724, 43315, 31838, 89770, 53914, 76669, 53077, 12578, 16837,
  33714, 83751, 31838, 64811, 71848, 46461, 53077, 33856, 26838, 54622, 36009,
  31838, 56292, 38554, 79195, 40165, 26094, 85767, 74949, 94225, 63046, 56578,
  64811, 35817, 53096, 28841, 15028, 67072, 60776, 13761, 11171, 25547, 78358,
  84422, 85120, 72393, 33493, 84304, 36264, 99650, 98074, 60776, 19177, 39216,
  15111, 67595, 67770, 39216, 35817, 99650, 83450, 27524, 69874, 22021, 71764,
  56652, 60776, 56578, 76174, 54622, 33351, 75991, 72493, 13301, 41863, 85568,
  73961, 78358, 61946, 45113, 53096, 56543, 56652, 99650, 76329, 55561, 62481,
  90246, 81753, 73961, 26270, 22021, 94225, 38533, 67595, 73961, 74739, 83450,
  25771, 35837, 14704, 36515, 18285, 54490, 94209, 50655, 22021, 64811, 43336,
  69617, 83450, 18285, 25771, 76669, 13231, 24169, 82383, 84304, 58761, 67595,
  41596, 98757, 76875, 97581, 71764, 40046, 41164, 76669, 25771, 53096,
];

const testLeftList = [3, 4, 2, 1, 3, 3];

const testRightList = [4, 3, 5, 3, 9, 3];

// Define a route
router.get("/", (req, res) => {
  res.send(
    `<a href="/day-1/part-1">Go to day one</a><br /><a href="/day-1/part-2">Go to part 2</a>`
  );
});

router.get("/part-1", (req, res) => {
  let sum = 0;

  const leftSorted = leftList.sort((a, b) => a - b);
  const rightSorted = rightList.sort((a, b) => a - b);

  for (let i = 0; i < leftSorted.length; i++) {
    if (leftSorted.at(i) > rightSorted.at(i)) {
      sum += leftSorted.at(i) - rightSorted.at(i);
    } else if (leftSorted.at(i) < rightSorted.at(i)) {
      sum += rightSorted.at(i) - leftSorted.at(i);
    } else {
      sum += 0;
    }
  }

  res.send(
    `Left List: <pre>${JSON.stringify(
      leftList
    )}</pre><br />Right List: <pre>${JSON.stringify(
      rightList
    )}</pre><br />Sum: ${sum}`
  );
});

router.get("/part-2", (req, res) => {
  const counts = {};
  let sum = 0;

  rightList.forEach((item) => {
    if (leftList.includes(item)) {
      counts[item.toString()] = (counts[item.toString()] || 0) + 1;
    }
  });

  const matchingNumbers = leftList.filter((item) => rightList.includes(item));

  matchingNumbers.forEach((item) => {
    const multiple = counts[item] || 0;
    if (multiple === 0) return;

    const firstMultiplication = item * counts[item];

    sum += firstMultiplication;
  });

  res.send(
    `Left List: <pre>${JSON.stringify(
      leftList
    )}</pre><br />Right List: <pre>${JSON.stringify(rightList)}</pre><br />
    Matching Numbers: <pre>${JSON.stringify(matchingNumbers)}</pre><br />
    <pre>${JSON.stringify(counts)}</pre><br />Sum: ${sum}`
  );
});

module.exports = router;
