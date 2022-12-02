import { Lbl, Inp } from 'components/Forms/FormField/FormField.styled'
import PropTypes from 'prop-types';

const FormField = ({label, settings, onChange}) => {
    return (
        <Lbl>{label}
            <Inp 
                type={settings.type}
                name={settings.name}
                pattern={settings.pattern}
                title={settings.title}
                required={settings.required}
                onChange={onChange}
            />
        </Lbl>
    )
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  settings: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};



export default FormField