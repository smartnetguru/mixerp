// ReSharper disable All
using System;
using System.Diagnostics;
using System.Linq;
using MixERP.Net.Api.Core.Fakes;
using MixERP.Net.ApplicationState.Cache;
using Xunit;

namespace MixERP.Net.Api.Core.Tests
{
    public class GetEmailAddressByPartyIdTests
    {
        public static GetEmailAddressByPartyIdController Fixture()
        {
            GetEmailAddressByPartyIdController controller = new GetEmailAddressByPartyIdController(new GetEmailAddressByPartyIdRepository(), "", new LoginView());
            return controller;
        }

        [Fact]
        [Conditional("Debug")]
        public void Execute()
        {
            var actual = Fixture().Execute(new GetEmailAddressByPartyIdController.Annotation());
            Assert.Equal("FizzBuzz", actual);
        }
    }
}