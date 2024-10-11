import { BlockStack, Box, Card, DataTable, Text } from '@shopify/polaris';
import React from 'react';

function PreviewCard({ title, description, options }) {

    const rows = options.map((option) => [
        option.title || '-',
        option.subtitle || '-',
        option.label || '-',
        option.discountType || '',
        option.quantity || '-',
        option.amount || '-',
    ]);

    return (
        <Card sectioned>
            <Text as="h2" variant="headingSm">
                Preview
            </Text>
            <Box paddingBlock="200">
                <BlockStack gap="200">
                    <Text as="h3" variant="headingSm" fontWeight="bold" alignment='center'>
                        {title ? title : ''}
                    </Text>
                    <Text as="p" variant="bodyMd">
                        {description ? description : ''}
                    </Text>
                </BlockStack>
            </Box>
            <DataTable
                columnContentTypes={[
                    'text',
                    'text',
                    'text',
                    'text',
                    'numeric',
                    'text',
                ]}
                headings={[
                    'Title',
                    'SubTitle',
                    'Label',
                    'Discount Type',
                    'Quantity',
                    'Amount',
                ]}
                rows={rows}
            />
        </Card>
    )
}

export default PreviewCard;
