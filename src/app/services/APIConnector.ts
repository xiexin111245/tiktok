// located in <root>/services/APIConnector.ts

class APIConnector {
    constructor() {}
  
    onResultClick(): void {
      // optional. Called when a result has been clicked
    }
  
    onAutocompleteResultClick(): void {
      // optional. Called when an autocomplete result has been clicked
    }
  
    async onSearch(requestState: any, queryConfig: any): Promise<any> {
      const response = await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          requestState,
          queryConfig,
        }),
      });
      return response.json();
    }
  
    async onAutocomplete(requestState: any, queryConfig: any): Promise<any> {
      const response = await fetch("/api/autocomplete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          requestState,
          queryConfig,
        }),
      });
      return response.json();
    }
  }
  
  export default APIConnector;
  