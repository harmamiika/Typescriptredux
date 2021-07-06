import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../state';

// export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
// react-redux awkward
