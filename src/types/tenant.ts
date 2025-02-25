interface TenantTheme {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  }
  
  interface TenantConfig {
    id: string;
    name: string;
    theme: TenantTheme;
    assets: {
      logo: string;
      characters: string[];
      widgets: string[];
    };
    fanlink: {
      deeplinkPrefix: string;
      webhookEndpoint: string;
    };
  }