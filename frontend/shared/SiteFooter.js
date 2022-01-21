import React from 'react';
import { Footer, Text } from 'grommet';

let year = new Date().getFullYear();

const SiteFooter = () => {
    return (
        <Footer background="accent-1" pad="small" responsive="yes">
            <Text textAlign="center" size="xsmall">
                © {year} Copyright Kristen Krofchik
            </Text>
        </Footer>
    )
};

export default SiteFooter; 