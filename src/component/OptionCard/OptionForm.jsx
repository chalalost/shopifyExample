import { Button, Card, Icon, Text } from '@shopify/polaris';
import { PlusCircleIcon } from '@shopify/polaris-icons';
import React, { useEffect, useState } from 'react';
import OptionCard from './OptionCard';

function OptionForm({ register, setValue, setOptionsView, errors, clearErrors }) {

    const [options, setOptions] = useState([
        { id: Date.now(), title: '', subtitle: '', label: '', quantity: 1, discountType: null, amount: '' },
        { id: Date.now() + 1, title: '', subtitle: '', label: '', quantity: 1, discountType: null, amount: '' }
    ]);

    const addOption = () => {
        setOptions([
            ...options,
            { id: Date.now(), title: '', subtitle: '', label: '', quantity: 1, discountType: 'None', amount: '' },
        ]);
        setOptionsView(options);
    };

    const handleOptionChange = (index, field, value) => {
        const updatedOptions = [...options];
        updatedOptions[index][field] = value;
        setOptions(updatedOptions);
        setOptionsView(updatedOptions);
    };

    const handleDeleteOption = (index) => {
        const updatedOptions = options.filter((_, i) => i !== index);
        setOptions(updatedOptions);
        setOptionsView(updatedOptions);
    };


    useEffect(() => {
        setOptionsView(options);
    }, [options])

    return (
        <Card sectioned>
            <Text variant="headingSm">
                List Option
            </Text>
            {options.map((option, index) => (
                <OptionCard
                    key={option.id}
                    register={register}
                    setValue={setValue}
                    option={options}
                    errors={errors}
                    index={index}
                    clearErrors={clearErrors}
                    onChange={handleOptionChange}
                    onDelete={() => handleDeleteOption(index)}
                />
            ))}
            <Button
                fullWidth
                icon={<Icon source={PlusCircleIcon} />}
                onClick={addOption}
            >Add Option</Button>
        </Card>
    )
}

export default OptionForm;
