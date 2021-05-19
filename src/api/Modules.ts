import {ModuleInfo} from "./ModuleInfo";
import Authors from "./Authors";

const nUrl = "https://github.com/PovezloPovezlo/math_server/blob/master/src/module/n.cpp#L"
const zUrl = "https://github.com/PovezloPovezlo/math_server/blob/master/src/module/z.cpp#L"
const qUrl = "https://github.com/PovezloPovezlo/math_server/blob/master/src/module/q.cpp#L"
const pUrl = "https://github.com/PovezloPovezlo/math_server/blob/master/src/module/p.cpp#L"

const Modules = {
    //region N
    "COM_NN_D": new ModuleInfo(Authors.BagaevDanil, "COM_NN_D", nUrl + "21"),
    "NZER_N_B": new ModuleInfo(Authors.BagaevDanil, "NZER_N_B", nUrl + "53"),
    "ADD_1N_N": new ModuleInfo(Authors.BagaevDanil, "ADD_1N_N", nUrl + "68"),
    "ADD_NN_N": new ModuleInfo(Authors.Intrigger, "ADD_NN_N", nUrl + "105"),
    "SUB_NN_N": new ModuleInfo(Authors.Intrigger, "SUB_NN_N", nUrl + "151"),
    "MUL_ND_N": new ModuleInfo(Authors.Intrigger, "MUL_ND_N", nUrl + "197"),
    "MUL_Nk_N": new ModuleInfo(Authors.KillReal, "MUL_Nk_N", nUrl + "224"),
    "MUL_NN_N": new ModuleInfo(Authors.KillReal, "MUL_NN_N", nUrl + "247"),
    "SUB_NDN_N": new ModuleInfo(Authors.alexart878, "SUB_NDN_N", nUrl + "276"),
    "DIV_NN_Dk": new ModuleInfo(Authors.alexart878, "DIV_NN_Dk", nUrl + "294"),
    "DIV_NN_N": new ModuleInfo(Authors.Intrigger, "DIV_NN_N", nUrl + "328"),
    "MOD_NN_N": new ModuleInfo(Authors.Intrigger, "MOD_NN_N", nUrl + "353"),
    "GCF_NN_N": new ModuleInfo(Authors.KillReal, "GCF_NN_N", nUrl + "373"),
    "LCM_NN_N": new ModuleInfo(Authors.alexart878, "LCM_NN_N", nUrl + "400"),
    //endregion

    //region Z
    "ABS_Z_N": new ModuleInfo(Authors.BagaevDanil, "ABS_Z_N", zUrl + "19"),
    "POZ_Z_D": new ModuleInfo(Authors.BagaevDanil, "POZ_Z_D", zUrl + "32"),
    "MUL_ZM_Z": new ModuleInfo(Authors.BagaevDanil, "MUL_ZM_Z", zUrl + "52"),
    "TRANS_N_Z": new ModuleInfo(Authors.BagaevDanil, "TRANS_N_Z", zUrl + "68"),
    "TRANS_Z_N": new ModuleInfo(Authors.BagaevDanil, "TRANS_Z_N", zUrl + "80"),
    "ADD_ZZ_Z": new ModuleInfo(Authors["Arctic-beaver"], "ADD_ZZ_Z", zUrl + "95"),
    "SUB_ZZ_Z": new ModuleInfo(Authors["Arctic-beaver"], "SUB_ZZ_Z", zUrl + "162"),
    "MUL_ZZ_Z": new ModuleInfo(Authors.WhoLeb, "MUL_ZZ_Z", zUrl + "177"),
    "DIV_ZZ_Z": new ModuleInfo(Authors["Arctic-beaver"], "DIV_ZZ_Z", zUrl + "199"),
    "MOD_ZZ_Z": new ModuleInfo(Authors.WhoLeb, "MOD_ZZ_Z", zUrl + "199"),
    //endregion

    //region q
    "RED_Q_Q": new ModuleInfo(Authors.BassinIlya, "RED_Q_Q", qUrl + "23"),
    "INT_Q_B": new ModuleInfo(Authors.WhoLeb, "INT_Q_B", qUrl + "35"),
    "TRANS_Z_Q": new ModuleInfo(Authors["nastasia-av"], "TRANS_Z_Q", qUrl + "52"),
    "TRANS_Q_Z": new ModuleInfo(Authors.DenisionSoft, "TRANS_Q_Z", qUrl + "69"),
    "ADD_QQ_Q": new ModuleInfo(Authors.KillReal, "ADD_QQ_Q", qUrl + "88"),
    "SUB_QQ_Q": new ModuleInfo(Authors.KillReal, "SUB_QQ_Q", qUrl + "102"),
    "MUL_QQ_Q": new ModuleInfo(Authors["nastasia-av"], "MUL_QQ_Q", qUrl + "116"),
    "DIV_QQ_Q": new ModuleInfo(Authors["nastasia-av"], "DIV_QQ_Q", qUrl + "135"),
    //endregion

    //region p
    "ADD_PP_P": new ModuleInfo(Authors.alexart878, "ADD_PP_P", pUrl + "24"),
    "SUB_PP_P": new ModuleInfo(Authors.alexart878, "SUB_PP_P", pUrl + "38"),
    "MUL_PQ_P": new ModuleInfo(Authors.DenisionSoft, "MUL_PQ_P", pUrl + "52"),
    "MUL_Pxk_P": new ModuleInfo(Authors.DenisionSoft, "MUL_Pxk_P", pUrl + "75"),
    "LED_P_Q": new ModuleInfo(Authors["nastasia-av"], "LED_P_Q", pUrl + "99"),
    "DEG_P_N": new ModuleInfo(Authors["nastasia-av"], "DEG_P_N", pUrl + "113"),
    "FAC_P_Q": new ModuleInfo(Authors.unknown, "FAC_P_Q", pUrl + "127"),
    "MUL_PP_P": new ModuleInfo(Authors.unknown, "MUL_PP_P", pUrl + "141"),
    "DIV_PP_P": new ModuleInfo(Authors.unknown, "DIV_PP_P", pUrl + "155"),
    "MOD_PP_P": new ModuleInfo(Authors.unknown, "MOD_PP_P", pUrl + "169"),
    "GCF_PP_P": new ModuleInfo(Authors["nastasia-av"], "GCF_PP_P", pUrl + "183"),
    "DER_P_P": new ModuleInfo(Authors.WhoLeb, "DER_P_P", pUrl + "218"),
    "NMR_P_P": new ModuleInfo(Authors.WhoLeb, "NMR_P_P", pUrl + "249"),
    //endregion


};

export default Modules;