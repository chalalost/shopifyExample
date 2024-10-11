import { AppProvider, Button, Grid, Icon, Page, Text } from '@shopify/polaris';
import { ArrowLeftIcon } from '@shopify/polaris-icons';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';
import GeneralCard from './component/GeneralCard/GeneralCard.jsx';
import OptionForm from './component/OptionCard/OptionForm.jsx';
import PreviewCard from './component/PreviewCard/PreviewCard';

function App() {
  const { register, handleSubmit, setValue, clearErrors, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Thực hiện API call
    fetch('/api/submit', {
      method: 'POST',
      body: JSON.stringify(data),
    }).then(response => alert('Call api'));
  };

  const [options, setOptions] = useState([]);

  const [campaignPreview, setCampaignPreview] = useState('');
  const [titlePreview, setTitlePreview] = useState('');
  const [descriptionPreview, setDescriptionPreview] = useState('');

  return (
    <AppProvider i18n={{}}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Page >
          <div className="header-container">
            <Button className="custom-back-button" icon={<Icon source={ArrowLeftIcon} />}>
            </Button>
            <div className='page-title'>
              <Text variant="heading2xl" as="p">
                Create volume discount
              </Text>
            </div>
            <div className='save-button'>
              <Button submit primary size='large'>
                Save
              </Button>
            </div>
          </div>
          <Grid >
            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
              <GeneralCard
                register={register}
                errors={errors}
                clearErrors={clearErrors}
                setValue={setValue}
                setCampain={setCampaignPreview}
                setDes={setDescriptionPreview}
                setTitle={setTitlePreview} />
            </Grid.Cell>
            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
              <PreviewCard
                title={titlePreview}
                description={descriptionPreview}
                options={options} />
            </Grid.Cell>
          </Grid>
          <div style={{ marginTop: '8px' }}>
            <Grid>
              <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                <OptionForm
                  register={register}
                  setValue={setValue}
                  errors={errors}
                  setOptionsView={setOptions}
                  clearErrors={clearErrors}
                />
              </Grid.Cell>
            </Grid>
          </div>
        </Page>
      </form>
    </AppProvider>
  );
}

export default App;
