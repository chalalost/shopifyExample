import { Button, Card, Grid, Icon, Select, TextField } from '@shopify/polaris';
import { DeleteIcon } from '@shopify/polaris-icons';
import React, { useState } from 'react';

function OptionCard({ register, errors, setValue, option, index, clearErrors, onChange, onDelete }) {
    const [data, setData] = useState(option || { id: Date.now(), title: '', subtitle: '', label: '', quantity: 1, discountType: '', amount: '' });
    const [typeDiscount, setTypeDiscount] = useState(0);

    const handleOnChangeText = (field, value, index) => {
        data[field] = value;
        clearErrors(index)
        setData({ ...data })
        //setCampain(value)
    }
    const handleOnChangeSelect = (value) => {
        data.discountType = value;
        if (value === 'None') {
            setTypeDiscount(1);
        }
        if (value === '% discount') {
            setTypeDiscount(2)
        }
        if (value === 'Discount / each') {
            setTypeDiscount(3)
        }
        setData({ ...data })
        //setTitle(value)
    }
    return (
        <Card
            sectioned>
            <div className="option-header">
                <strong>Option</strong>
                <Button
                    icon={<Icon source={DeleteIcon} />}
                    onClick={onDelete}
                    accessibilityLabel="Delete option"
                />
            </div>
            <Grid>
                <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 2, lg: 4, xl: 4 }} >
                    <TextField
                        label="Title"
                        placeholder="#"
                        autoComplete="off"
                        value={data?.title}
                        {...register(`options[${index}].title`, { required: 'Title is required' })}
                        error={errors?.options?.[index]?.title?.message}
                        onChange={(value) => {
                            setValue(`options[${index}].title`, value)
                            onChange(index, 'title', value)
                            handleOnChangeText('title', value, `options[${index}].title`)
                        }}
                    />

                    <TextField
                        label="Quantity"
                        type='number'
                        placeholder="#"
                        autoComplete="off"
                        {...register(`options[${index}].quantity`, { required: 'Quantity is required' })}
                        error={errors?.options?.[index]?.quantity?.message}
                        value={data?.quantity}
                        onChange={(value) => {
                            setValue(`options[${index}].quantity`, value)
                            onChange(index, 'quantity', value)
                            handleOnChangeText('quantity', value, `options[${index}].quantity`)
                        }}
                    />

                </Grid.Cell>
                <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 2, lg: 4, xl: 4 }} >
                    <TextField
                        label="Subtitle"
                        placeholder="#"
                        autoComplete="off"
                        value={data?.subtitle}
                        onChange={(value) => {
                            handleOnChangeText('subtitle', value)
                            onChange(index, 'subtitle', value)
                        }}
                    />
                    <Select
                        label="Discount type"
                        autoComplete="off"
                        options={['Discount / each', 'None', '% discount']}
                        value={data?.discountType}
                        onChange={(value) => {
                            handleOnChangeSelect(value)
                            onChange(index, 'discountType', value)
                        }}
                    />

                </Grid.Cell>
                <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 2, lg: 4, xl: 4 }} >
                    <TextField
                        label="Label(optional)"
                        placeholder="#"
                        autoComplete="off"
                        value={data?.label}
                        onChange={(value) => {
                            handleOnChangeText('label', value)
                            onChange(index, 'label', value)
                        }}
                    />
                    {typeDiscount !== 1 ? (
                        <TextField
                            type='number'
                            label="Amount"
                            placeholder="#"
                            autoComplete="off"
                            suffix={typeDiscount === 2 ? "%" : "$"}
                            value={data?.amount}
                            {...register(`options[${index}].amount`, { required: 'Amount is required' })}
                            error={errors?.options?.[index]?.amount?.message}
                            onChange={(value) => {
                                setValue(`options[${index}].amount`, value)
                                onChange(index, 'amount', value)
                                handleOnChangeText('amount', value, `options[${index}].amount`)
                            }}
                        />
                    )
                        : <></>
                    }

                </Grid.Cell>
            </Grid>
        </Card>
    )
}
export default OptionCard;
