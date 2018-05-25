// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------

import DropdownBasic, * as dropdownBasic from '../../components/pages/components/dropdown/DropdownBasic';
import DropdownSearch, * as dropdownSearch from '../../components/pages/components/dropdown/DropdownSearch';

// -----------------------------------------------------------------------------------------
// ------------------------------------ String Data ----------------------------------------
// -----------------------------------------------------------------------------------------

const BASIC = 'Basic';
const SEARCH = 'Search'

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
  }
];
