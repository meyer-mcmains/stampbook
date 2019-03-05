import PropTypes from 'prop-types';

export const stampType = PropTypes.shape({
  key: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  props: PropTypes.object,
  stamp: PropTypes.func.isRequired
});

export const stampsType = PropTypes.arrayOf(stampType);

export const locationType = PropTypes.shape({
  hash: PropTypes.string,
  key: PropTypes.string,
  pathname: PropTypes.string.isRequired,
  search: PropTypes.string,
  state: PropTypes.string
});
