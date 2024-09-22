import { Helmet } from 'react-helmet';
import './App.scss';
import CacheBuster from 'react-cache-buster';
import { HashRouter } from 'react-router-dom';
import { PageRouter } from './PageRouter';
import Loading from '../../component/Loader/Loader';
/**
 * Page Starting point
 * Routing and all
 */

const App = () => {
    let version: any = '1.1.0';
    let isProduction: any = true;
    return (
        <>
            <CacheBuster
                currentVersion={version}
                isEnabled={isProduction} //If false, the library is disabled.
                isVerboseMode={false} //If true, the library writes verbose logs to console.
                loadingComponent={<Loading />} //If not pass, nothing appears at the time of new version check.
            >
                <Helmet>
                    <title>EHSSoftware.io</title>
                    <meta name="HandheldFriendly" content="true" />
                    <meta name="MobileOptimized" content="320" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                </Helmet>
                <PageRouter />
            </CacheBuster>
        </>
    );
};

export default App;
