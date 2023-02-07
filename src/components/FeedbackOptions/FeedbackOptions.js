import PropTypes from 'prop-types';
import { Button, ButtonCard } from './FeedbackOptions.styled';

export const FeedbackOptions = ({onLeaveFeedback, ...object }) => {
    return (<ButtonCard>
        {Object.keys(object).map(option => {
            return (
                <Button 
                    type="button"
                    name={option}
                    key={option}
                    onClick = {event => onLeaveFeedback(event.currentTarget.name)}>
                        {option}
                </Button>)
            })
        }
    </ButtonCard>)
}

FeedbackOptions.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}