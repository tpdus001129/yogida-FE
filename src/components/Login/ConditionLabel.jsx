import PropTypes from 'prop-types';

ConditionLabel.propTypes = {
  message: PropTypes.string.isRequired,
  isSatisfied: PropTypes.bool.isRequired,
};

export default function ConditionLabel({ message, isSatisfied }) {
  return (
    <div className="flex flex-row items-center">
      <span className={`w-2 h-2 rounded-full ${isSatisfied ? 'bg-primary' : 'bg-red'} mr-2`}></span>
      <span className={`text-xs ${isSatisfied ? 'text-primary' : 'text-red'}`}>{message}</span>
    </div>
  );
}
