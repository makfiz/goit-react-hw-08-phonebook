import { ColorRing } from 'react-loader-spinner'
import {SpinerWraper} from 'components/Loader/Loader.styled'
    


const Loader = () => {
    return (
        <SpinerWraper>
            <ColorRing
                visible={true}
                height="250px"
                width="250px"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
        </SpinerWraper>
    )
}

export default Loader