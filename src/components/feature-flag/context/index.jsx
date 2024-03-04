import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";




export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
    const [loading, setLoading] = useState(false);
    const [enabledFlags, setEnabledFlags] = useState({});

    async function featchFeatureFlags(){
        try{
            setLoading(true);
            // original service call
            const response = await featureFlagsDataServiceCall();
            console.log(response);
            setEnabledFlags(response);
            setLoading(false);
        }catch(error){
            setLoading(false);
            console.log(error);
        }
    }

    useEffect(() => {
        featchFeatureFlags();
    }, []);


    return (<FeatureFlagsContext.Provider value={{ loading, enabledFlags }}>{children}</FeatureFlagsContext.Provider>);
}