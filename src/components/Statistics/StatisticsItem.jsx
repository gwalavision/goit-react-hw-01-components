import PropTypes from 'prop-types'

function StatisticsItem({label, percentage }) {
    return (
        <li className="item">
              <span className="label">{label}</span>
              <span className="percentage">{percentage}&#37;</span>
        </li>
    )
}

StatisticsItem.propTypes = {
     percentage: PropTypes.number.isRequired,
     label: PropTypes.string.isRequired,
}

export default StatisticsItem