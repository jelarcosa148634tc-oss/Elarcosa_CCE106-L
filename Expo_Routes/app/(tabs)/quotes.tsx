import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useTheme } from "../../context/ThemeContext";

type Quote = {
  quote: string;
  author: string;
};

export default function QuotesScreen() {
  const { darkMode } = useTheme();

  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchQuote = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("https://dummyjson.com/quotes/random");

      if (!response.ok) {
        throw new Error("Failed to fetch quote.");
      }

      const data = await response.json();

      if (!data.quote || !data.author) {
        setQuote(null);
        setError("No quote was returned.");
        return;
      }

      setQuote({
        quote: data.quote,
        author: data.author,
      });
    } catch (error) {
      setQuote(null);
      setError("Unable to load a quote. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const backgroundColor = darkMode ? "#0F172A" : "#172554";
  const cardColor = darkMode ? "#1E293B" : "#F8FAFC";
  const textColor = darkMode ? "#FFFFFF" : "#172554";
  const textColor2 = darkMode ? "#FFFFFF" : "#FFFFFF";
  const secondaryText = darkMode ? "#CBD5E1" : "#CBD5E1";
  const secondaryText2 = darkMode ? "#FFFFFF" : "#172554";
  const borderColor = darkMode ? "#334155" : "#E2E8F0";
  const primaryColor = darkMode ? "#60A5FA" : "#2563EB";

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: textColor2 }]}>
          Quote of the Day
        </Text>

        <Text style={[styles.subtitle, { color: secondaryText }]}>
          Get a little inspiration anytime.
        </Text>
      </View>

      <View
        style={[
          styles.quoteCard,
          {
            backgroundColor: cardColor,
            borderColor,
          },
        ]}
      >
        {loading ? (
          <View style={styles.stateContainer}>
            <ActivityIndicator size="large" color={primaryColor} />

            <Text style={[styles.stateText, { color: secondaryText }]}>
              Loading quote...
            </Text>
          </View>
        ) : error ? (
          <View style={styles.stateContainer}>
            <Text style={styles.errorIcon}>!</Text>

            <Text style={[styles.errorTitle, { color: textColor }]}>
              Something went wrong
            </Text>

            <Text style={[styles.stateText, { color: secondaryText }]}>
              {error}
            </Text>
          </View>
        ) : quote ? (
          <View>
            <Text style={[styles.quoteMark, { color: primaryColor }]}>“</Text>

            <Text style={[styles.quoteText, { color: textColor }]}>
              {quote.quote}
            </Text>

            <Text style={[styles.author, { color: secondaryText2 }]}>
              — {quote.author}
            </Text>
          </View>
        ) : (
          <View style={styles.stateContainer}>
            <Text style={[styles.stateText, { color: secondaryText }]}>
              No quote available.
            </Text>
          </View>
        )}
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: primaryColor }]}
        onPress={fetchQuote}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <Text style={styles.buttonText}>New Quote</Text>
        )}
      </TouchableOpacity>

      <Text style={[styles.footer, { color: secondaryText }]}>
        Tap the button to request a new quote.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 65,
  },

  header: {
    marginBottom: 24,
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
  },

  subtitle: {
    fontSize: 14,
    marginTop: 6,
  },

  quoteCard: {
    minHeight: 300,
    borderWidth: 1,
    borderRadius: 24,
    padding: 28,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 3,
  },

  quoteMark: {
    fontSize: 64,
    fontWeight: "800",
    lineHeight: 65,
  },

  quoteText: {
    fontSize: 23,
    lineHeight: 34,
    fontWeight: "600",
    marginTop: -8,
  },

  author: {
    fontSize: 15,
    fontWeight: "600",
    marginTop: 24,
    textAlign: "right",
  },

  stateContainer: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 220,
  },

  stateText: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 14,
  },

  errorIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#FEE2E2",
    color: "#DC2626",
    textAlign: "center",
    lineHeight: 42,
    fontSize: 22,
    fontWeight: "800",
  },

  errorTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 14,
  },

  button: {
    height: 54,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  footer: {
    fontSize: 13,
    textAlign: "center",
    marginTop: 14,
  },
});
