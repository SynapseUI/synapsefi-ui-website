// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------

import DropdownBasic, * as dropdownBasic from '../../components/pages/components/dropdown/DropdownBasic';
import DropdownSearch, * as dropdownSearch from '../../components/pages/components/dropdown/DropdownSearch';
import DropdownMultiselect, * as dropdownMultiselect from '../../components/pages/components/dropdown/DropdownMultiselect';

// -----------------------------------------------------------------------------------------
// ------------------------------------ String Data ----------------------------------------
// -----------------------------------------------------------------------------------------

const BASIC = 'Basic';
const SEARCH = 'Search';
const MULTISELECT = 'Multiselect';

// -----------------------------------------------------------------------------------------
// ------------------------------------  Data ----------------------------------------------
// -----------------------------------------------------------------------------------------

export default [
  {
    title: BASIC,
    code: dropdownBasic.jsxSnippet,
    Component: DropdownBasic,
  },
  {
    title: SEARCH,
    code: dropdownSearch.jsxSnippet,
    Component: DropdownSearch,
  },
  {
    title: MULTISELECT,
    code: dropdownMultiselect.jsxSnippet,
    Component: DropdownMultiselect,
  }
];
