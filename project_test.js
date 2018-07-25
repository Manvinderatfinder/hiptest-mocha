describe('Hiptest demo -  FHI quick picks', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('./actionwords.js').Actionwords);
  });

  describe('Default top picks display', function () {
    function defaultTopPicksDisplay (fhi_quote_form_value) {
      // Given I am on a FHI quote page /health-insurance/quote
      this.actionwords.iAmOnAFHIQuotePageHealthinsurancequote("It is a prerequisite that I already filled FHI form");
      // Then top picks should only display
      this.actionwords.topPicksShouldOnlyDisplay();
      // When a shortcode parameter ""= true  is used.
      this.actionwords.aShortcodeParameterP1TrueIsUsed("", "|show_top_picks=true|");
    }

    it('lifestage (uid:54555347-07e8-459c-93c2-996dfa4738a8)', function () {
      defaultTopPicksDisplay.apply(this, ['single_male']);
    });

    it('cover_type (uid:647e1821-a597-433b-86b8-3eb8001b9c64)', function () {
      defaultTopPicksDisplay.apply(this, ['combined']);
    });

    it('react-autosuggest__container (uid:d2725f8b-c19c-4db2-84b7-c4564d1d6787)', function () {
      defaultTopPicksDisplay.apply(this, ['"state": "NSW",         "suburb": "OXFORD FALLS",         "postcode": 2100']);
    });
  });


  it('Top picks container (uid:012ff60d-d7e8-472e-9fc1-cbc2031b686b)', function () {
    // Given I am on a FHI quote page /health-insurance/quote
    this.actionwords.iAmOnAFHIQuotePageHealthinsurancequote("");
    // Then top picks should contain three categories
    this.actionwords.topPicksShouldContainThreeCategories("|Cheapest|  |Best value| |Most comprehensive| ");
  });

  it('Top picks - Hospital and extra (uid:faf132f1-38ad-4c64-a27e-063ca9cc2c93)', function () {
    // Given I get a quote for Single female + Hospital and extra
    this.actionwords.iGetAQuoteForSingleFemaleHospitalAndExtra();
    // Then top picks should display policies for
    this.actionwords.topPicksShouldDisplayPoliciesFor("|Hospital - Basic cover|  |Extras - Basic cover|");
  });

  it('Top picks  - Hospital only (uid:09b710a5-0256-41bb-98da-15f21892d4d4)', function () {
    // Given I get a quote for Single female + Hospital only
    this.actionwords.iGetAQuoteForSingleFemaleHospitalOnly();
    // Then top picks should display policies for   Hospital - Basic cover
    this.actionwords.topPicksShouldDisplayPoliciesForHospitalBasicCover();
  });

  it('Top picks - Extra only (uid:b6b8f268-0d6c-4d66-a5a1-3f7b934514cc)', function () {
    // Given I get a quote for Extra only
    this.actionwords.iGetAQuoteForExtraOnly();
    // Then top picks should display policies for   Extras - Basic cover
    this.actionwords.topPicksShouldDisplayPoliciesForExtrasBasicCover();
  });

  it('Max top picks display (uid:061fb88b-87ce-4668-a9ef-4b1ec0dd9e83)', function () {
    // Given I am on FHI quote page
    this.actionwords.iAmOnFHIQuotePage();
    // Then top picks should display above quote table
    this.actionwords.topPicksShouldDisplayAboveQuoteTable();
    // And the max number of top picks should be 3
    this.actionwords.theMaxNumberOfTopPicksShouldBe3();
  });

  describe('Top picks - Same provider', function () {
    function topPicksSameProvider (provider_abc, provider_xyz, new_parameter_name) {
      // Given top pick is active in FHI quote page
      this.actionwords.topPickIsActiveInFHIQuotePage();
      // Then top picks should display max of 2 policy from same provider
      this.actionwords.topPicksShouldDisplayMaxOf2PolicyFromSameProvider();
    }

    it(' (uid:86eef7cd-35ce-4fd7-be8a-582764d3e7bd)', function () {
      topPicksSameProvider.apply(this, ['Policy 1   ', 'Policy 2', 'Policy 3']);
    });
  });


  describe('Top picks - Unique policy', function () {
    function topPicksUniquePolicy (provider_xyz, new_parameter_name_1, provider_abc) {
      // Given top picks is active in FHI quote page
      this.actionwords.topPicksIsActiveInFHIQuotePage();
      // Then top picks should display unique policies for all three top picks
      this.actionwords.topPicksShouldDisplayUniquePoliciesForAllThreeTopPicks();
    }

    it('Top pick result (uid:f67d7083-7b2b-4945-9012-ecfd241b9ff3)', function () {
      topPicksUniquePolicy.apply(this, ['Policy 1', 'Policy 2', 'Policy 3']);
    });
  });


  it('Top picks - Split policy (uid:b22e7097-89b7-4cd5-880a-820d623de756)', function () {
    // Given top picks is active in FHI quote page
    this.actionwords.topPicksIsActiveInFHIQuotePage();
    // Then top picks should display any split policy
    this.actionwords.topPicksShouldDisplayAnySplitPolicy();
  });

  it('Top picks - Without CTA button (uid:dcae88b5-03b8-49a9-8382-1c53240f162e)', function () {
    // Given top picks is active in FHI quote page
    this.actionwords.topPicksIsActiveInFHIQuotePage();
    // Then top picks should display any split policy without CTA button
    this.actionwords.topPicksShouldDisplayAnySplitPolicyWithoutCTAButton();
  });

  it('Top picks - Inactive policy (uid:8193d7dd-e3e1-47e8-8417-8afe2eb3ea98)', function () {
    // Given top picks is active in FHI quote page
    this.actionwords.topPicksIsActiveInFHIQuotePage();
    // And if one of there policies goes inactive
    this.actionwords.ifOneOfTherePoliciesGoesInactive();
    // Then the next policy suits to these categories -  Cheapest, Best Value, Most popular should automatically display there
    this.actionwords.theNextPolicySuitsToTheseCategoriesCheapestBestValueMostPopularShouldAutomaticallyDisplayThere();
  });

  it('Top picks - Not all top picks are available (uid:60452d25-2f1f-4e54-bb15-d81d32ea730f)', function () {
    // Given top picks is active in FHI quote page
    this.actionwords.topPicksIsActiveInFHIQuotePage();
    // And there are only 2 top picks available for that particular quote
    this.actionwords.thereAreOnly2TopPicksAvailableForThatParticularQuote();
    // Then top picks section should display 2 top picks and display a "not available" placeholder in place for the missing one
    this.actionwords.topPicksSectionShouldDisplay2TopPicksAndDisplayAP1PlaceholderInPlaceForTheMissingOne("not available");
  });

  it('Top picks - Direct url access (uid:9357309e-928c-44ed-91a5-5106e3c166ee)', function () {
    // Given I open a direct quote url
    this.actionwords.iOpenADirectQuoteUrl();
    // Then top picks should be accessible through direct quote link
    this.actionwords.topPicksShouldBeAccessibleThroughDirectQuoteLink();
  });

  it('Top picks - mobile (uid:a20f0eb7-c738-412b-a43d-759e6f70e611)', function () {
    // Given I open a direct quote url
    this.actionwords.iOpenADirectQuoteUrl();
    // Then top picks should display above quote table
    this.actionwords.topPicksShouldDisplayAboveQuoteTable();
  });
});
