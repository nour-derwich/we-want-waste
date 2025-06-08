"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  MapPin,
  Trash2,
  Calendar,
  CreditCard,
  FileCheck,
  AlertTriangle,
  Truck,
  Clock,
  PoundSterlingIcon as Pound,
} from "lucide-react"

interface Skip {
  id: string
  name: string
  size: string
  price: number
  image: string
  hirePeriod: string
  allowedOnRoad: boolean
  description?: string
  dimensions?: string
}

const mockSkipData: Skip[] = [
  {
    id: "1",
    name: "4 Yard Skip",
    size: "4 Yards",
    price: 211,
    image: "/placeholder.svg?height=200&width=300",
    hirePeriod: "14 day hire",
    allowedOnRoad: true,
    description: "Perfect for small home projects",
    dimensions: "6ft x 4ft x 3ft",
  },
  {
    id: "2",
    name: "5 Yard Skip",
    size: "5 Yards",
    price: 241,
    image: "/placeholder.svg?height=200&width=300",
    hirePeriod: "14 day hire",
    allowedOnRoad: true,
    description: "Ideal for medium household clearance",
    dimensions: "7ft x 4ft x 3ft",
  },
  {
    id: "3",
    name: "6 Yard Skip",
    size: "6 Yards",
    price: 264,
    image: "/placeholder.svg?height=200&width=300",
    hirePeriod: "14 day hire",
    allowedOnRoad: true,
    description: "Great for bathroom or kitchen renovation",
    dimensions: "8ft x 4ft x 3ft",
  },
  {
    id: "4",
    name: "8 Yard Skip",
    size: "8 Yards",
    price: 295,
    image: "/placeholder.svg?height=200&width=300",
    hirePeriod: "14 day hire",
    allowedOnRoad: false,
    description: "Suitable for large home projects",
    dimensions: "10ft x 4ft x 3ft",
  },
  {
    id: "5",
    name: "10 Yard Skip",
    size: "10 Yards",
    price: 325,
    image: "/placeholder.svg?height=200&width=300",
    hirePeriod: "14 day hire",
    allowedOnRoad: false,
    description: "Perfect for construction waste",
    dimensions: "12ft x 4ft x 3ft",
  },
  {
    id: "6",
    name: "12 Yard Skip",
    size: "12 Yards",
    price: 355,
    image: "/placeholder.svg?height=200&width=300",
    hirePeriod: "14 day hire",
    allowedOnRoad: false,
    description: "Largest option for major projects",
    dimensions: "14ft x 4ft x 3ft",
  },
]

const progressSteps = [
  { id: 1, name: "Postcode", icon: MapPin, completed: true },
  { id: 2, name: "Waste Type", icon: Trash2, completed: true },
  { id: 3, name: "Select Skip", icon: Truck, completed: false, current: true },
  { id: 4, name: "Permit Check", icon: FileCheck, completed: false },
  { id: 5, name: "Choose Date", icon: Calendar, completed: false },
  { id: 6, name: "Payment", icon: CreditCard, completed: false },
]

export default function SkipSelectorPage() {
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null)
  const [skips, setSkips] = useState<Skip[]>(mockSkipData)
  const [loading, setLoading] = useState(false)

  // Simulate API call
  useEffect(() => {
    const fetchSkips = async () => {
      setLoading(true)
      try {
        // In a real app, you would fetch from: https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft
        // For now, we'll use mock data
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setSkips(mockSkipData)
      } catch (error) {
        console.error("Failed to fetch skips:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchSkips()
  }, [])

  const handleSkipSelect = (skip: Skip) => {
    setSelectedSkip(skip)
  }

  const currentStepIndex = progressSteps.findIndex((step) => step.current)
  const progressPercentage = ((currentStepIndex + 1) / progressSteps.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">WeWantWaste</h1>
                <p className="text-sm text-gray-500">Skip Hire Service</p>
              </div>
            </div>
            <Badge variant="outline" className="hidden sm:flex">
              Garden Waste Collection
            </Badge>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>
                Step {currentStepIndex + 1} of {progressSteps.length}
              </span>
              <span>{Math.round(progressPercentage)}% Complete</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-4">
            {progressSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={step.id}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-full text-sm ${
                    step.completed
                      ? "bg-emerald-100 text-emerald-700"
                      : step.current
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-100 text-gray-500"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{step.name}</span>
                  {step.completed && <CheckCircle className="w-4 h-4" />}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Choose Your Perfect Skip Size</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select the skip size that best matches your project needs. All skips come with a 14-day hire period.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-6">
                  <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
                  <div className="bg-gray-200 h-6 rounded mb-2"></div>
                  <div className="bg-gray-200 h-4 rounded mb-4"></div>
                  <div className="bg-gray-200 h-10 rounded"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {skips.map((skip) => (
              <Card
                key={skip.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedSkip?.id === skip.id ? "ring-2 ring-emerald-500 shadow-lg scale-105" : "hover:scale-102"
                }`}
                onClick={() => handleSkipSelect(skip)}
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={skip.image || "/placeholder.svg"}
                      alt={skip.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-3 right-3 bg-emerald-600">{skip.size}</Badge>
                    {!skip.allowedOnRoad && (
                      <div className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1">
                        <AlertTriangle className="w-3 h-3" />
                        <span>Permit Required</span>
                      </div>
                    )}
                    {selectedSkip?.id === skip.id && (
                      <div className="absolute inset-0 bg-emerald-600/20 rounded-t-lg flex items-center justify-center">
                        <CheckCircle className="w-12 h-12 text-emerald-600" />
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-gray-900">{skip.name}</h3>
                      <div className="text-right">
                        <div className="flex items-center text-2xl font-bold text-emerald-600">
                          <Pound className="w-5 h-5" />
                          {skip.price}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-3">{skip.description}</p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{skip.hirePeriod}</span>
                      </div>
                      <span className="text-xs">{skip.dimensions}</span>
                    </div>

                    <Button
                      className={`w-full ${
                        selectedSkip?.id === skip.id
                          ? "bg-emerald-600 hover:bg-emerald-700"
                          : "bg-gray-900 hover:bg-gray-800"
                      }`}
                      onClick={(e) => {
                        e.stopPropagation()
                        handleSkipSelect(skip)
                      }}
                    >
                      {selectedSkip?.id === skip.id ? (
                        <>
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Selected
                        </>
                      ) : (
                        "Select This Skip"
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Selection Summary */}
        {selectedSkip && (
          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                  <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{selectedSkip.name} Selected</h3>
                    <p className="text-gray-600">
                      £{selectedSkip.price} • {selectedSkip.hirePeriod}
                    </p>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button variant="outline" className="flex items-center space-x-2">
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </Button>
                  <Button className="bg-emerald-600 hover:bg-emerald-700 flex items-center space-x-2">
                    <span>Continue</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
