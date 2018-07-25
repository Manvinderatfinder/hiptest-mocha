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

    it('lifestage', function () {
      defaultTopPicksDisplay.apply(this, ['single_male']);
    });

    it('cover_type', function () {
      defaultTopPicksDisplay.apply(this, ['combined']);
    });

    it('react-autosuggest__container', function () {
      defaultTopPicksDisplay.apply(this, ['"state": "NSW",         "suburb": "OXFORD FALLS",         "postcode": 2100']);
    });
  });


  it('Top picks container', function () {
    // Given I am on a FHI quote page /health-insurance/quote
    this.actionwords.iAmOnAFHIQuotePageHealthinsurancequote("");
    // Then top picks should contain three categories
    this.actionwords.topPicksShouldContainThreeCategories("|Cheapest|  |Best value| |Most comprehensive| ");
  });

  it('Top picks - Hospital and extra', function () {
    // Given I get a quote for Single female + Hospital and extra
    this.actionwords.iGetAQuoteForSingleFemaleHospitalAndExtra();
    // Then top picks should display policies for
    this.actionwords.topPicksShouldDisplayPoliciesFor("|Hospital - Basic cover|  |Extras - Basic cover|");
  });

  it('Top picks  - Hospital only', function () {
    // Given I get a quote for Single female + Hospital only
    this.actionwords.iGetAQuoteForSingleFemaleHospitalOnly();
    // Then top picks should display policies for   Hospital - Basic cover
    this.actionwords.topPicksShouldDisplayPoliciesForHospitalBasicCover();
  });

  it('Top picks - Extra only', function () {
    // Given I get a quote for Extra only
    this.actionwords.iGetAQuoteForExtraOnly();
    // Then top picks should display policies for   Extras - Basic cover
    this.actionwords.topPicksShouldDisplayPoliciesForExtrasBasicCover();
  });

  it('Max top picks display', function () {
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

    it('', function () {
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

    it('Top pick result', function () {
      topPicksUniquePolicy.apply(this, ['Policy 1', 'Policy 2', 'Policy 3']);
    });
  });


  it('Top picks - Split policy', function () {
    // Given top picks is active in FHI quote page
    this.actionwords.topPicksIsActiveInFHIQuotePage();
    // Then top picks should display any split policy
    this.actionwords.topPicksShouldDisplayAnySplitPolicy();
  });

  it('Top picks - Without CTA button', function () {
    // Given top picks is active in FHI quote page
    this.actionwords.topPicksIsActiveInFHIQuotePage();
    // Then top picks should display any split policy without CTA button
    this.actionwords.topPicksShouldDisplayAnySplitPolicyWithoutCTAButton();
  });

  it('Top picks - Inactive policy', function () {
    // Given top picks is active in FHI quote page
    this.actionwords.topPicksIsActiveInFHIQuotePage();
    // And if one of there policies goes inactive
    this.actionwords.ifOneOfTherePoliciesGoesInactive();
    // Then the next policy suits to these categories -  Cheapest, Best Value, Most popular should automatically display there
    this.actionwords.theNextPolicySuitsToTheseCategoriesCheapestBestValueMostPopularShouldAutomaticallyDisplayThere();
  });

  it('Top picks - Not all top picks are available', function () {
    // Given top picks is active in FHI quote page
    this.actionwords.topPicksIsActiveInFHIQuotePage();
    // And there are only 2 top picks available for that particular quote
    this.actionwords.thereAreOnly2TopPicksAvailableForThatParticularQuote();
    // Then top picks section should display 2 top picks and display a "not available" placeholder in place for the missing one
    this.actionwords.topPicksSectionShouldDisplay2TopPicksAndDisplayAP1PlaceholderInPlaceForTheMissingOne("not available");
  });

  it('Top picks - Direct url access', function () {
    // Given I open a direct quote url
    this.actionwords.iOpenADirectQuoteUrl();
    // Then top picks should be accessible through direct quote link
    this.actionwords.topPicksShouldBeAccessibleThroughDirectQuoteLink();
  });

  it('FHI top pick in mobile', function () {
    // Given Givne I am on FHI page
    this.actionwords.givneIAmOnFHIPage();
    // Then top picks should display above quote table
    this.actionwords.topPicksShouldDisplayAboveQuoteTable();
  });
});
