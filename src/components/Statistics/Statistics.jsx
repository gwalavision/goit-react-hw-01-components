import PropTypes from 'prop-types'


import StatisticsItem from './StatisticsItem'

function Statistics({ stats, title }) {
    return (
        <section className="statistics">
            {title && <h2 className="title">{title}</h2>}
                <ul className="stat-list">
                    {
                    stats.map(({ id, label, percentage }) => (
                            <StatisticsItem
                            key={id}
                            percentage={percentage}
                            label={label}
                                />
                    )
                    )
                }
            </ul>
        </section>
            )
}

Statistics.propTypes = {
    stats: PropTypes.array.isRequired,
    title: PropTypes.string
}

export default Statistics