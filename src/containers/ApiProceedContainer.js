import { connect } from 'react-redux';
import { fetchApi } from '../redux/actions';
import { isApiLoading, getApiResult, getApiError } from '../redux/selectors';
import ApiProceed from '../blocks/apiProceed/ApiProceed';

const mapStateToProps = state => ({ 
    loading: isApiLoading(state),
    result: getApiResult(state),
    error: getApiError(state),
});
const mapDispatchToProps = dispatch => ({
    fetchApi: alpha => dispatch(fetchApi(alpha))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ApiProceed)