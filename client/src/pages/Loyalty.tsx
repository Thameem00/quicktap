import { DefaultLayout } from "@/components/layout/DefaultLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Gift, Star, TrendingUp, Award, Clock } from "lucide-react";

export default function Loyalty() {
  return (
    <DefaultLayout>
      <div className="container py-12 px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-quicktap-teal text-white px-4 py-2 text-sm">
            Coming Soon
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-quicktap-creamy mb-4">
            Loyalty Rewards Program
          </h1>
          <p className="text-xl text-quicktap-creamy/70 max-w-2xl mx-auto">
            Get ready for exclusive rewards, special offers, and amazing benefits for being our valued customer!
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="border-quicktap-teal/50 bg-quicktap-navy/80 backdrop-blur shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-quicktap-teal rounded-full flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-quicktap-creamy text-2xl">Earn Points</CardTitle>
              <CardDescription className="text-quicktap-creamy/70 text-base">
                Collect points with every order and unlock exclusive rewards
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-quicktap-teal/50 bg-quicktap-navy/80 backdrop-blur shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-quicktap-teal rounded-full flex items-center justify-center mb-4">
                <Gift className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-quicktap-creamy text-2xl">Exclusive Offers</CardTitle>
              <CardDescription className="text-quicktap-creamy/70 text-base">
                Access member-only deals, discounts, and special promotions
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-quicktap-teal/50 bg-quicktap-navy/80 backdrop-blur shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-quicktap-teal rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-quicktap-creamy text-2xl">VIP Benefits</CardTitle>
              <CardDescription className="text-quicktap-creamy/70 text-base">
                Enjoy priority service, birthday treats, and premium perks
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Main Content Card */}
        <Card className="max-w-4xl mx-auto border-quicktap-teal/50 bg-quicktap-navy/70 backdrop-blur shadow-2xl">
          <CardContent className="pt-12 pb-12 text-center">
            <div className="mb-8">
              <div className="w-24 h-24 bg-quicktap-teal/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-12 h-12 text-quicktap-teal" />
              </div>
              <h2 className="text-3xl font-bold text-quicktap-creamy mb-4">
                Something Amazing is Coming
              </h2>
              <p className="text-lg text-quicktap-creamy/70 max-w-xl mx-auto mb-8">
                We're working hard to bring you an incredible loyalty program. 
                Stay tuned for exciting rewards, special offers, and exclusive benefits!
              </p>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center gap-2 mb-8">
              <div className="w-3 h-3 bg-quicktap-teal rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-quicktap-teal/60 rounded-full animate-pulse delay-100"></div>
              <div className="w-3 h-3 bg-quicktap-teal/40 rounded-full animate-pulse delay-200"></div>
            </div>

            <div className="space-y-4 text-quicktap-creamy/60">
              <p className="flex items-center justify-center gap-2">
                <TrendingUp className="w-5 h-5 text-quicktap-teal" />
                Track your rewards and points
              </p>
              <p className="flex items-center justify-center gap-2">
                <Gift className="w-5 h-5 text-quicktap-teal" />
                Redeem exclusive offers
              </p>
              <p className="flex items-center justify-center gap-2">
                <Star className="w-5 h-5 text-quicktap-teal" />
                Unlock tier-based benefits
              </p>
            </div>

            <Button 
              disabled
              className="mt-8 bg-quicktap-teal/50 hover:bg-quicktap-teal/50 text-white px-8 py-6 text-lg"
            >
              Launching Soon
            </Button>
          </CardContent>
        </Card>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-quicktap-creamy/50 text-sm">
            Want to be notified when we launch? Keep ordering with us and you'll be the first to know!
          </p>
        </div>
      </div>
    </DefaultLayout>
  );
}
