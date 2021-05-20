import {ModuleInfo} from "./ModuleInfo";
import Authors from "./Authors";

const nUrl = "https://github.com/PovezloPovezlo/math_server/blob/master/src/module/n.cpp#L"
const zUrl = "https://github.com/PovezloPovezlo/math_server/blob/master/src/module/z.cpp#L"
const qUrl = "https://github.com/PovezloPovezlo/math_server/blob/master/src/module/q.cpp#L"
const pUrl = "https://github.com/PovezloPovezlo/math_server/blob/master/src/module/p.cpp#L"

const Modules = {
    //region N
    "COM_NN_D": new ModuleInfo(Authors.BagaevDanil, "COM_NN_D", nUrl + "25"),
    "NZER_N_B": new ModuleInfo(Authors.BagaevDanil, "NZER_N_B", nUrl + "57"),
    "ADD_1N_N": new ModuleInfo(Authors.BagaevDanil, "ADD_1N_N", nUrl + "72"),
    "ADD_NN_N": new ModuleInfo(Authors.Intrigger, "ADD_NN_N", nUrl + "109"),
    "SUB_NN_N": new ModuleInfo(Authors.Intrigger, "SUB_NN_N", nUrl + "155"),
    "MUL_ND_N": new ModuleInfo(Authors.Intrigger, "MUL_ND_N", nUrl + "201"),
    "MUL_Nk_N": new ModuleInfo(Authors.KillReal, "MUL_Nk_N", nUrl + "228"),
    "MUL_NN_N": new ModuleInfo(Authors.KillReal, "MUL_NN_N", nUrl + "251"),
    "SUB_NDN_N": new ModuleInfo(Authors.alexart878, "SUB_NDN_N", nUrl + "280"),
    "DIV_NN_Dk": new ModuleInfo(Authors.alexart878, "DIV_NN_Dk", nUrl + "298"),
    "DIV_NN_N": new ModuleInfo(Authors.Intrigger, "DIV_NN_N", nUrl + "332"),
    "MOD_NN_N": new ModuleInfo(Authors.Intrigger, "MOD_NN_N", nUrl + "360"),
    "GCF_NN_N": new ModuleInfo(Authors.KillReal, "GCF_NN_N", nUrl + "379"),
    "LCM_NN_N": new ModuleInfo(Authors.alexart878, "LCM_NN_N", nUrl + "406"),
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
    "MOD_ZZ_Z": new ModuleInfo(Authors.WhoLeb, "MOD_ZZ_Z", zUrl + "234"),
    //endregion

    //region q
    "RED_Q_Q": new ModuleInfo(Authors.BassinIlya, "RED_Q_Q", qUrl + "23"),
    "INT_Q_B": new ModuleInfo(Authors.WhoLeb, "INT_Q_B", qUrl + "46"),
    "TRANS_Z_Q": new ModuleInfo(Authors["nastasia-av"], "TRANS_Z_Q", qUrl + "63"),
    "TRANS_Q_Z": new ModuleInfo(Authors.DenisionSoft, "TRANS_Q_Z", qUrl + "80"),
    "ADD_QQ_Q": new ModuleInfo(Authors.KillReal, "ADD_QQ_Q", qUrl + "99"),
    "SUB_QQ_Q": new ModuleInfo(Authors.KillReal, "SUB_QQ_Q", qUrl + "123"),
    "MUL_QQ_Q": new ModuleInfo(Authors["nastasia-av"], "MUL_QQ_Q", qUrl + "147"),
    "DIV_QQ_Q": new ModuleInfo(Authors["nastasia-av"], "DIV_QQ_Q", qUrl + "168"),
    //endregion

    //region p
    "ADD_PP_P": new ModuleInfo(Authors.alexart878, "ADD_PP_P", pUrl + "24"),
    "SUB_PP_P": new ModuleInfo(Authors.alexart878, "SUB_PP_P", pUrl + "47"),
    "MUL_PQ_P": new ModuleInfo(Authors.DenisionSoft, "MUL_PQ_P", pUrl + "70"),
    "MUL_Pxk_P": new ModuleInfo(Authors.DenisionSoft, "MUL_Pxk_P", pUrl + "93"),
    "LED_P_Q": new ModuleInfo(Authors["nastasia-av"], "LED_P_Q", pUrl + "117"),
    "DEG_P_N": new ModuleInfo(Authors["nastasia-av"], "DEG_P_N", pUrl + "131"),
    "FAC_P_Q": new ModuleInfo(Authors["Arctic-beaver"], "FAC_P_Q", pUrl + "145"),
    "MUL_PP_P": new ModuleInfo(Authors.WhoLeb, "MUL_PP_P", pUrl + "187"),
    "DIV_PP_P": new ModuleInfo(Authors.WhoLeb, "DIV_PP_P", pUrl + "214"),
    "MOD_PP_P": new ModuleInfo(Authors.WhoLeb, "MOD_PP_P", pUrl + "251"),
    "GCF_PP_P": new ModuleInfo(Authors["nastasia-av"], "GCF_PP_P", pUrl + "289"),
    "DER_P_P": new ModuleInfo(Authors.WhoLeb, "DER_P_P", pUrl + "324"),
    "NMR_P_P": new ModuleInfo(Authors.WhoLeb, "NMR_P_P", pUrl + "355"),
    //endregion


};

export default Modules;