import { Card, FormLayout, Text, TextField } from '@shopify/polaris';
import React, { useState } from 'react';

function GeneralCard({ register, errors, clearErrors, setValue, setCampain, setTitle, setDes }) {
    const [data, setData] = useState({
        campaign: '',
        title: '',
        description: ''
    });
    const handleOnChangeCamp = (value) => {
        data.campaign = value;
        if (value !== '') {
            clearErrors('campaign')
        }
        setData({ ...data })
        setCampain(value)
    }
    const handleOnChangeTitle = (value) => {
        data.title = value;
        setData({ ...data })
        setTitle(value)
    }
    const handleOnChangeDes = (value) => {
        data.description = value;
        setData({ ...data })
        setDes(value)
    }

    return (
        <Card sectioned>
            <Text as="h2" variant="headingSm">
                General
            </Text>
            <FormLayout>
                <TextField
                    value={data.campaign}
                    label="Campaign"
                    placeholder="Enter the campaign"
                    autoComplete="off"
                    {...register('campaign', { required: 'Campaign is required' })}
                    error={errors.campaign?.message}
                    onChange={(value) => {
                        setValue('campaign', value)
                        handleOnChangeCamp(value)
                    }}
                />
                <TextField
                    label="Title"
                    placeholder="Enter the title"
                    autoComplete="off"
                    value={data.title}
                    {...register('title')}
                    onChange={(value) => {
                        setValue('title', value)
                        handleOnChangeTitle(value)
                    }}
                />
                <TextField
                    label="Description"
                    placeholder="Enter the description"
                    multiline
                    autoComplete="off"
                    value={data.description}
                    {...register('description')}
                    onChange={(value) => {
                        setValue('description', value)
                        handleOnChangeDes(value)
                    }}
                />
            </FormLayout>
        </Card>
    )
}
export default GeneralCard;
